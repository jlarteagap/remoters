import { useContext, useEffect } from 'react'
import { AuthContext } from '../../../context/auth'
import { useMutation } from '@apollo/client'
import { UPDATE_JOB } from '../../../Graphql/Mutation'

const useUpdateActive = () => {
  const { user } = useContext(AuthContext)

  const isActivePostJob = (id, deleteAt) => {
    const Today = new Date()
    const [updateJob] = useMutation(UPDATE_JOB)

    useEffect(() => {
      if (deleteAt === Today) {
        updateJob({
          variables: {
            input: {
              id: id,
              active: false,
              username: {
                email: user.email
              }
            }
          }
        })
      }
    }, [])
  }
  return { isActivePostJob }
}

export default useUpdateActive
