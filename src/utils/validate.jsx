export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  )
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,}$/.test(
      password
    )

  if (!isEmailValid) return 'Email id is not valid'
  if (!isPasswordValid) return 'Incorrect Password'

  return null
}
