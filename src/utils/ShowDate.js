/* eslint-disable react/prop-types */
import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import es from 'dayjs/locale/es'

const ShowDateInJobs = ({ date }) => {
  dayjs.locale(es)
  dayjs.extend(relativeTime)

  return <span>{dayjs(date).toNow(true)}</span>
}

export default ShowDateInJobs
