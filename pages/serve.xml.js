import { getServerSideSitemap } from 'next-sitemap'
import { useQuery } from '@apollo/client'
import { GetJobsDocument } from '@service/graphql/graphql'

export async function getServerSideProps() {
  const { data } = useQuery(GetJobsDocument, {
    variables: {
      active: true
    }
  })

  const allPost = data.map(post => {
    const xmlData = post.frontmatter
    return {
      author: xmlData.author,
      date: xmlData.date,
      description: xmlData.description,
      images: `${process.env.SITE_URL}/${xmlData.images[0]}`,
      tags: xmlData.tags,
      title: xmlData.title
    }
  })
  return await getServerSideSitemap(allPost)
}

export default function Sitemap() {}
