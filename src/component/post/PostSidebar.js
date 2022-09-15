/* eslint-disable react/prop-types */
import React from 'react'

export const PostSidebar = ({ company, link }) => {
  return (
    <aside className="post__sidebar p-5 mr-5 has-text-centered">
      <section className="post__sidebar-section p-5">
        <figure className="post__sidebar-img"></figure>
        <div className="post__sidebar__title my-5">
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
