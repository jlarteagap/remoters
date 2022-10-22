import { useContext, useEffect } from 'react'
import { AuthContext } from '../../../context/auth'
import { useMutation } from '@apollo/client'
import { UpdateJobDocument } from '../../../../service/graphql/graphql'

const useUpdateActive = () => {
  const { user } = useContext(AuthContext)
  const Today = new Date()
  const [updateJob] = useMutation(UpdateJobDocument)

  const IsActivePostJob = (id, deleteAt) => {
    useEffect(() => {
      if (deleteAt <= Today) {
        updateJob({
          variables: {
            input: {
              id,
              active: false,
              username: {
                email: user.email
              }
            }
          }
        })
      }
    }, [id, deleteAt])
  }
  return { IsActivePostJob }
}

export default useUpdateActive
