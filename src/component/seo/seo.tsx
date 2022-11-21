import React from 'react'
import Head from 'next/head'

const Seo = ({ web, title, description }) => {
  return (
    <Head>
      {title !== 'Reclutop' ? (
        <title>
          {title} | {web}
        </title>
      ) : (
        <title>{web}</title>
      )}

      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
    </Head>
  )
}
export default Seo

Seo.defaultProps = {
  web: 'Reclutop',
  title: 'Reclutop',
  description:
    'Principal bolsa de trabajo para desarrolladores, creativos y todo profesional en tecnología'
}
