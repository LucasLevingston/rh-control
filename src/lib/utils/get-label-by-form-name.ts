export function getLabelByFormName(name: string): string {
  switch (name) {
    case 'name':
      return 'Full Name'
    case 'displayName':
      return 'Full Name'
    case 'email':
      return 'Email'
    case 'password':
      return 'Password'
    case 'confirmPassword':
      return 'Confirm Password'
    case 'cpf':
      return 'CPF'
    case 'imageUrl':
      return 'Image URL'
    case 'birthDate':
      return 'Date of Birth'
    case 'phone':
      return 'Phone'
    case 'gender':
      return 'Gender'
    case 'zipCode':
      return 'ZIP Code'
    case 'street':
      return 'Street'
    case 'number':
      return 'Number'
    case 'city':
      return 'City'
    case 'state':
      return 'State'
    case 'profilePictureFile':
      return 'Profile Picture'
    case 'action':
      return 'Action'
    case 'objective':
      return 'Objective'
    case 'product':
      return 'Product'
    case 'unity':
      return 'Unit'
    case 'predictedValue':
      return 'Predicted Value'
    case 'status':
      return 'Status'
    case 'predictedStartsDate':
      return 'Predicted Start Date'
    case 'predictedEndDate':
      return 'Predicted End Date'
    case 'registrationNumber':
      return 'Registration Number'
    case 'pisNumber':
      return 'PIS Number'
    case 'hireDate':
      return 'Hire Date'
    case 'terminationDate':
      return 'Termination Date'
    case 'jobPositionId':
      return 'Job Position'
    case 'departmentId':
      return 'Department'
    case 'salary':
      return 'Salary'
    case 'emergencyContactName':
      return 'Emergency Contact Name'
    case 'emergencyContactPhone':
      return 'Emergency Contact Phone'
    case 'title':
      return 'Title'
    case 'description':
      return 'Description'
    case 'contactEmail':
      return 'Contact Email'
    case 'contactPhone':
      return 'Contact Phone'
    case 'location':
      return 'Location'
    case 'budget':
      return 'Budget'
    case 'headOfDepartmentId':
      return 'Head of Department'
    case 'contractNumber':
      return 'Contract Number'
    case 'value':
      return 'Value'
    case 'startDate':
      return 'Start Date'
    case 'endDate':
      return 'End Date'
    case 'partiesInvolved':
      return 'Parties Involved'
    case 'type':
      return 'Type'
    case 'unit':
      return 'Unit of Measure'
    case 'targetValue':
      return 'Target Value'
    case 'actualValue':
      return 'Actual Value'
    case 'measurementFrequency':
      return 'Measurement Frequency'
    case 'dataSource':
      return 'Data Source'
    default:
      return name
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .trim()
  }
}
