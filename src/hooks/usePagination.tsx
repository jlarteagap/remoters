import { useState, createContext } from 'react'

interface ContextType {
  nextPage: () => void
  prevPage: () => void
  resetState: () => void
  page: {
    limit: number
    offset: number
    actual: number
  }
}

export const AppContextValidate = createContext<ContextType>({
  nextPage: () => {},
  prevPage: () => {},
  resetState: () => {},
  page: {
    limit: 0,
    offset: 0,
    actual: 0
  }
})

export const usePagination = () => {
  const [page, setPage] = useState({
    limit: 5,
    offset: 0,
    actual: 1
  })

  const nextPage = () => {
    setPage({
      offset: page.offset + page.limit,
      actual: page.actual + 1,
      limit: page.limit
    })
  }
  const prevPage = () => {
    setPage({
      offset: page.offset - page.limit,
      actual: page.actual - 1,
      limit: page.limit
    })
  }
  const resetState = () => {
    setPage({
      offset: 0,
      actual: 1,
      limit: page.limit
    })
  }

  return { nextPage, prevPage, resetState, page }
}
