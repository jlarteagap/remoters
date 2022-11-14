import { getServerSideSitemap } from 'next-sitemap'
import { gql } from '@apollo/client'

import client from '../../src/hoc/apollo-client'

export const getServerSideProps = async ctx => {
  const siteUrl = 'http://reclutop.com'
  const { data } = await client.query({
    query: gql`
      query getJobs {
        getJobs {
          slug
        }
      }
    `
  })

  const fields =
    data &&
    data.getJobs.map(post => ({
      loc: `${siteUrl}/post/${post.slug}`,
      lastmod: new Date().toISOString()
    }))

  return getServerSideSitemap(ctx, fields)
}

export default function Site() {
  // console
}
