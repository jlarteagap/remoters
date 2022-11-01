import React from 'react'
import { SelectField } from '../../../utils/form/Fields'

import { AllCategoriesDocument } from '@service/graphql/graphql'
import { useQuery } from '@apollo/client'
import PropTypes from 'prop-types'

export const Categories = () => {
  const { data, loading, error } = useQuery(AllCategoriesDocument)
  if (loading) return <span>cargando...</span>
  if (error) return <span>error</span>

  return (
    <SelectField
      label="Categoria"
      name="category"
      type="select"
      options={data.allCategories}
    />
  )
}

Categories.propTypes = {
  defaultValues: PropTypes.string
}
