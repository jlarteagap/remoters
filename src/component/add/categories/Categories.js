import React from 'react'
import { SelectField } from '../../../utils/form/Fields'

const categories = [
  { value: 'web_developers', text: 'Web Development' },
  { value: 'software_developer', text: 'Software Developers' },
  { value: 'social_media_managers', text: 'Social Media' },
  { value: 'project_managers', text: 'Project Management' },
  { value: 'comercial', text: 'Business Management & Ventas' },
  { value: 'soporte', text: 'Soporte' },
  { value: 'designers', text: 'Diseño web y gráfico' },
  { value: 'devops', text: 'DevOps' },
  { value: 'seo', text: 'SEO - Search Engine Optimization' },
  { value: 'copywriting', text: 'Copywriting' },
  { value: 'seguridad', text: 'Cyber Security' },
  { value: 'qa', text: 'Quality Assurance' },
  { value: 'reclutadores', text: 'RRHH & Reclutamiento' }
]

export const Categories = () => {
  return (
    <SelectField
      label="Categoria"
      name="category"
      type="select"
      options={categories}
    />
  )
}
