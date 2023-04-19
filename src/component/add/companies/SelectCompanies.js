import React, { useContext } from 'react'
import { useQuery } from '@apollo/client'
import { AllCompaniesDocument } from '@service/graphql/graphql'
import { SelectField } from '@utils/form/Fields'
import { AuthContext } from '@context/auth'
import { useRouter } from 'next/navigation'

export const SelectCompanies = () => {
  const { user } = useContext(AuthContext)
  const { push } = useRouter()
  const { data, loading } = useQuery(AllCompaniesDocument, {
    variables: {
      username: user.email
    }
  })
  if (loading) return 'cargando'
  if (data.allCompanies.length < 1) push('/panel/company')
  return (
    <SelectField
      label="Empresa"
      name="company"
      type="select"
      options={data.allCompanies}
    />
  )
}
