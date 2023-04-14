import * as Yup from 'yup'

export const validate = Yup.object().shape({
  name: Yup.string().required('Nombre de la empresa es requerida'),
  site: Yup.string()
    .url('Ingrese una página válida')
    .required('Ingrese una página web'),
  phone: Yup.number('Ingrese número de teléfono')
    .positive('Ingrese número de teléfono')
    .min(7)
})
