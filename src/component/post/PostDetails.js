/* eslint-disable react/prop-types */
import React from 'react'
import { PostFooter } from './PostFooter'
import { PostSidebar } from './PostSidebar'
import { BsSearch } from 'react-icons/bs'
export const PostDetails = ({ post }) => {
  const { content, company, link } = post

  return (
    <div className="post__card card is-flex">
      <article className="card-content">
        <header className="post__headeris is-flex is-flex-direction-column ">
          <span className="is-size-5 is-size-7-mobile has-text-weight-light is-flex is-align-items-center">
            <BsSearch className="mr-4" />
            {company.name} esta contratando un:
          </span>
          <h2 className="is-size-3 is-size-5-mobile has-text-weight-bold">
            {content.title}
          </h2>
        </header>
        <section>{content.description}</section>
        <PostFooter link={link} />
      </article>
      <PostSidebar company={company} link={link} />
    </div>
  )
}
