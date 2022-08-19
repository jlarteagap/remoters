import React from 'react'
import { SelectField } from '../../../utils/form/Fields'
import { GET_UBICATION } from '../../../Graphql/Query'
import { useQuery } from '@apollo/client'

// eslint-disable-next-line react/prop-types
export const Ubications = ({ isLocation }) => {
  const { data, loading, error } = useQuery(GET_UBICATION)
  if (loading) return <span>cargando...</span>
  if (error) return <span>error</span>

  return (
    <div
      className={`field is-grouped is-grouped-multiline ${
        isLocation ? '' : 'is-hidden'
      }`}
    >
      <SelectField
        label="País"
        name="country"
        type="select"
        options={data.allUbication}
      />

      <SelectField
        label="Ciudad"
        name="city"
        type="select"
        options={data.allUbication[0].cities}
      />
    </div>
  )
}
