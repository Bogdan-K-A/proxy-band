import { createAction } from '@reduxjs/toolkit'

export const clearingFields = createAction('clearingFields')

clearingFields({
  name: '',
  username: '',
  email: '',
})
