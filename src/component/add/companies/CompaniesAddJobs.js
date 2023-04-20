import React, { useContext } from 'react'
import { InputFields } from '@utils/form/Fields'
import { AuthContext } from '@context/auth'
// import {} from '@context'
import { SelectCompanies } from './SelectCompanies'
export const CompaniesAddJobs = () => {
  const { user } = useContext(AuthContext)

  return user.role === 'admin' ? (
    <InputFields label="Empresa" type="text" name="company" />
  ) : (
    <div>
      <SelectCompanies />
    </div>
  )
}
