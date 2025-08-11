export const getPlaceholderByFormName = (name: string) => {
  switch (name) {
    case 'id':
      return 'Identifier'
    case 'name':
      return 'Full name'
    case 'displayName':
      return 'Full name'
    case 'email':
      return 'Enter your email'
    case 'password':
      return 'Enter your password'
    case 'confirmPassword':
      return 'Confirm your password'
    case 'cpf':
      return 'Enter your CPF'
    case 'googleAccessToken':
      return 'Google access token'
    case 'imageUrl':
      return 'Image URL'
    case 'gender':
      return 'Select gender'
    case 'role':
      return 'Select role'
    case 'isActive':
      return 'Is user active?'
    case 'lastLogin':
      return 'Last login'
    case 'emailVerified':
      return 'Is email verified?'
    case 'birthDate':
      return 'Date of birth'
    case 'phone':
      return 'Contact phone'
    case 'zipCode':
      return 'ZIP code'
    case 'city':
      return 'City'
    case 'state':
      return 'State'
    case 'street':
      return 'Street'
    case 'number':
      return 'Number'
    case 'createdAt':
      return 'Creation date'
    case 'updatedAt':
      return 'Last update'
    case 'action':
      return 'Action name'
    case 'objective':
      return 'Action objective'
    case 'status':
      return 'Current status'
    case 'product':
      return 'Product'
    case 'unity':
      return 'Unit of measure'
    case 'predictedValue':
      return 'Predicted value'
    case 'predictedStartsDate':
      return 'Predicted start date'
    case 'predictedEndDate':
      return 'Predicted end date'
    case 'programName':
      return 'Program name'
    case 'programType':
      return 'Program type'
    case 'strategicAxis':
      return 'Strategic axis'
    case 'budget':
      return 'Budget'
    case 'startDate':
      return 'Start date'
    case 'endDate':
      return 'End date'
    case 'targetAudience':
      return 'Target audience'
    case 'prefectureName':
      return 'Prefecture name'
    default:
      return 'Enter a value'
  }
}
