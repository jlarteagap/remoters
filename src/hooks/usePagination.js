import { useState } from "react"; 

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
    return{nextPage, prevPage, resetState, page}
  }