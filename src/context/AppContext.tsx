import { createContext } from 'react'

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

const AppContext = createContext<ContextType>({
  nextPage: () => {},
  prevPage: () => {},
  resetState: () => {},
  page: {
    limit: 0,
    offset: 0,
    actual: 0
  }
})
export default AppContext
