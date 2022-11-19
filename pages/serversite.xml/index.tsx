import { GetServerSideProps } from 'next'
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'

export const GetPost = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API
  const data = await fetch(apiUrl, {
    method: 'GET'
  })
  const res = await data.json()
  return res
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const siteUrl = 'http://reclutop.com'
  const data: any = await GetPost()
  const fields: ISitemapField[] = data?.map((data: any) => ({
    loc: `${siteUrl}/${data.slug}`,
    lastmod: new Date().toISOString()
  }))

  return getServerSideSitemap(ctx, fields)
}

export default function Site() {
  // console
}
