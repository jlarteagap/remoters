import * as Yup from 'yup'

export const validate = Yup.object().shape({
  email: Yup.string()
    .email('Correo no válido')
    .required('Necesitamos correo para ingresar'),
  password: Yup.string()
    .required('Ingrese una contraseña')
    .min(6, 'Su contraseña de es demasiada corta, ingrese mínimo 6 carácteres'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Las contraseñas no coinciden'
  )
})
