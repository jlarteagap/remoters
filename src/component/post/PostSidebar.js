/* eslint-disable react/prop-types */
import React from 'react'
import PostCSS from '@public/css/Post.module.css'
export const PostSidebar = ({ company, link }) => {
  return (
    <aside className={`${PostCSS.post__sidebar} p-5 mr-5 has-text-centered`}>
      <section className={`${PostCSS.post__sidebar_section} p-5`}>
        <figure className="post__sidebar-img"></figure>
        <div className={`${PostCSS.post__sidebar__title}  my-5`}>
          <h3 className="is-size-5 has-text-weight-bold">{company.name}</h3>
        </div>
        <a
          href={link}
          className="btn btn--blue is-fullwidth button has-text-weight-medium"
        >
          Aplicar
        </a>
      </section>
    </aside>
  )
}
