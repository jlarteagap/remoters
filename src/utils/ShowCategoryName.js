import { useQuery } from '@apollo/client'
import { GET_CATEGORY } from '../Graphql/Query'

const ShowCategoryName = ({ category }) => {
  const { data, loading } = useQuery(GET_CATEGORY, {
    variables: {
      slug: category
    }
  })

  if (loading) return 'cargando...'

  return data.getCategory.name
}

export default ShowCategoryName
