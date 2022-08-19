import React from 'react'
import { SelectField } from '../../../utils/form/Fields'
import { GET_CATEGORIES } from '../../../Graphql/Query'
import { useQuery } from '@apollo/client'

export const Categories = () => {
  const { data, loading, error } = useQuery(GET_CATEGORIES)
  if (loading) return <span>cargando...</span>
  if (error) return <span>error</span>

  console.log(data)
  return (
    <SelectField
      label="Categoria"
      name="category"
      type="select"
      options={data.allCategories}
    />
  )
}
