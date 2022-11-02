import React from 'react'
import { useRouter } from 'next/router'

const EditJob = () => {
  const router = useRouter()
  return <>Hola desde editar pagina {router.query.id}</>
}

export default EditJob
