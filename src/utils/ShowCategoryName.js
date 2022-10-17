import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_CATEGORY } from '../Graphql/Query'

const ShowCategoryName = ({ category }) => {
  const [showCategory, setShowCategory] = useState('')

  const { data, loading } = useQuery(GET_CATEGORY, {
    variables: {
      slug: category
    }
  })

  if (loading) return 'cargando...'
  useEffect(() => {
    if (data.getCategory !== undefined || null) {
      setShowCategory(data.getCategory.name)
    }
  }, [category])

  return showCategory
}

export default ShowCategoryName
