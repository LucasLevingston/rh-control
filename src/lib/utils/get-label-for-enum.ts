import { genderOptions } from './gender-options'

export function getLabelForEnum<T extends string>(value: T): string {
  return (enumLabels as Record<T, string>)[value] || value.replace(/_/g, ' ')
}

const enumLabels = {
  [genderOptions.MALE]: 'Male',
  [genderOptions.FEMALE]: 'Famele',
  [genderOptions.PREFER_NOT_TO_SAY]: 'Prefiro não dizer',
}
