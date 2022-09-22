import * as Yup from 'yup'

export const validate = Yup.object().shape({
  title: Yup.string().required('Nombre o título de la posición es requerida'),
  company: Yup.string().required('Nombre de la empresa es requerida'),
  link: Yup.string()
    .url('Debe ser una URL válida')
    .required('Necesitamos una URL válida'),
  contract: Yup.string().required('Tipo de contrato es requerido'),
  category: Yup.string().required('Categoría es requerida'),
  description: Yup.string()
    .required('Debe agregar una descripcion')
    .min(30, 'Debe agregar minimo 30 caracteres')
})
