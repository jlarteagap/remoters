import React from 'react'
import Link from 'next/link'
import headerCSS from '../../../public/css/Header.module.css'
export const Panel = () => {
  return (
    <>
      <Link
        href="/panel"
        className={`navbar-item ${headerCSS.menu__it} effect__hover`}
      >
        Administración
      </Link>
      <Link
        href="/panel/company"
        className={`navbar-item ${headerCSS.menu__it} effect__hover`}
      >
        Empresa
      </Link>
    </>
  )
}
