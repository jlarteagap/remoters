import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import { GET_COMPANIES } from '../../Graphql/Query';
import Loading from "../utils/Loading";

const Companies = ({user, onChange}) => {
    const {loading, error, data} = useQuery(GET_COMPANIES, {
        variables: {
            username: user
        }
    })

    if(loading) return <Loading />
    if(error) return `Error: ${error.message}`

    const updateState = (e) => {
        onChange(data.allCompanies.filter( filter => filter.name === e.target.value))
    }

    return(
        <div className="form__control">
                <label>Empresa</label>
                <select onChange={e => updateState(e)}>
                    <option>---</option>
                    {data.allCompanies.map(company => {
                        return(
                            <option 
                                key={company.id}
                                name="name"
                                value={company.name}>
                                    {company.name}
                                
                            </option>
                            )}
                        )}
                </select>
            </div>
    )
}

export default Companies