import React from 'react'
import { SelectField } from '../../../utils/form/Fields'

import { AllUbicationDocument } from '@service/graphql/graphql'
import { useQuery } from '@apollo/client'
import PropTypes from 'prop-types'

export const Ubications = ({ isLocation }) => {
  const { data, loading, error } = useQuery(AllUbicationDocument)
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

Ubications.propTypes = {
  defaultValues: PropTypes.object,
  isLocation: PropTypes.bool
}
