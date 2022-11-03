import { useContext } from 'react'
import { AuthContext } from '../../../context/auth'
import { useMutation } from '@apollo/client'
import { UpdateJobDocument } from '../../../../service/graphql/graphql'

const useUpdateActive = () => {
  const { user } = useContext(AuthContext)

  const [updateJob] = useMutation(UpdateJobDocument)

  const IsActivePostJob = id => {
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
  return { IsActivePostJob }
}

export default useUpdateActive
