import { createAction } from '@reduxjs/toolkit'

export const clearingFields = createAction('clearingFields')

let action = clearingFields({
  name: '',
  username: '',
  email: '',
})
console.log(action)
