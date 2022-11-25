/* eslint-disable react/prop-types */
import React from 'react'
import { PostFooter } from './PostFooter'
import { PostSidebar } from './PostSidebar'
import { BsSearch } from 'react-icons/bs'
import { FaClock } from 'react-icons/fa'
import ShowCategoryName from '../../utils/ShowCategoryName'
import ShowDateInJobs from '../../utils/ShowDate'
import JobIcon from '../../utils/JobIcon'
import PostCSS from '@public/css/Post.module.css'

export const PostDetails = ({ post }) => {
  const { content, company, link, category, updatedAt } = post
  console.log(post)
  const transformCreateAtDate = new Date(updatedAt * 1)
  return (
    <div className={`${PostCSS.post__card} card is-flex`}>
      <article className="card-content">
        <header
          className={`${PostCSS.post__header} is is-flex is-flex-direction-column`}
        >
          <span className="is-size-5 is-size-7-mobile has-text-weight-light is-flex is-align-items-center">
            <BsSearch className="mr-4" />
            {company.name} esta en busca de un:
          </span>
          <h2 className="is-size-3 is-size-5-mobile has-text-weight-bold">
            {content.title}
          </h2>
          <div
            className={`${PostCSS.post__details} is-flex is-align-items-center`}
          >
            <div className="help is-flex is-align-items-center mr-2">
              <FaClock size={12} className="mr-1" />
              Actualizado hace - <ShowDateInJobs date={transformCreateAtDate} />
            </div>
            <button className="button is-small is-primary is-light ml-1">
              <JobIcon category={category} />
              <ShowCategoryName category={category} />
            </button>
          </div>
          <hr />
        </header>
        <section>
          <div dangerouslySetInnerHTML={{ __html: content.description }}></div>
        </section>
        <PostFooter link={link} />
      </article>
      <PostSidebar company={company} link={link} />
    </div>
  )
}
