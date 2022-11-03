import { useQuery } from '@apollo/client'

import { GetCategoryDocument } from '@service/graphql/graphql'

const ShowCategoryName = ({ category }) => {
  const { data, loading } = useQuery(GetCategoryDocument, {
    variables: {
      slug: category
    }
  })

  if (loading) return 'cargando...'

  return data.getCategory.name
}

export default ShowCategoryName
