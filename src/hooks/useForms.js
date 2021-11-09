import { useState } from 'react'

export const useForms = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const UpdateState = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const validateForm = () => {
    const { email, password } = user
    const notValidate = !email || !password || password.length <= 1
    return notValidate
  }

  return { UpdateState, validateForm, user }
}
