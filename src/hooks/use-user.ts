import { User as FirebaseUser, updateProfile } from 'firebase/auth'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { auth, storage } from '@/lib/firebase'
import { useAuthProvider } from '@/providers/auth-context'

export const useUser = () => {
  const { user } = useAuthProvider()

  interface updateUserProps {
    data: Partial<FirebaseUser>
    profilePicture: File
  }

  const updateUser = async ({
    data,
    profilePicture,
  }: updateUserProps): Promise<void> => {
    if (!user) {
      throw new Error('No user logged in')
    }
    try {
      let photoURL = data.photoURL
      if (profilePicture) {
        const storagePath = `profilePictures/${data.uid}_${Date.now()}_${profilePicture.name}`
        const imageRef = ref(storage, storagePath)
        const uploadResult = await uploadBytes(imageRef, profilePicture)
        photoURL = await getDownloadURL(uploadResult.ref)
      }

      await updateProfile(user, {
        displayName:
          data.displayName === undefined ? user.displayName : data.displayName,
        photoURL,
      })
    } catch (err) {
      console.error('Error updating user:', err)
      throw err
    }
  }

  const logOut = async (): Promise<void> => {
    try {
      await auth.signOut()
    } catch (err) {
      console.error('Error logging out:', err)
      throw err
    }
  }

  return {
    logOut,
    user,
    updateUser,
  }
}
