import React, {Component} from 'react'
import { useQuery } from '@apollo/client'
import { USER_ACTUAL } from '../Graphql/Query'



const Session = Component => ( props ) => {
    const { loading, error, data, refetch} = useQuery( USER_ACTUAL )
    if(loading) return null
    if(error) return `Error ${error.message}`
    console.log(data)
    return <Component {...props} refetch={refetch} session={data} />
}

export default Session