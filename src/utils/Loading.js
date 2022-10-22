import React from 'react'
import loadingCSS from '../../public/css/Loading.module.css'
const Loading = () => (
  <div className={`${loadingCSS.loading}`}>
    <div className={`${loadingCSS.loadingpost}`}>
      <div className={`${loadingCSS.loadingavatar}`}></div>
      <div className={`${loadingCSS.loadingline}`}></div>
      <div className={`${loadingCSS.loadingline}`}></div>
    </div>

    <div className={`${loadingCSS.loadingpost}`}>
      <div className={`${loadingCSS.loadingavatar}`}></div>
      <div className={`${loadingCSS.loadingline}`}></div>
      <div className={`${loadingCSS.loadingline}`}></div>
    </div>

    <div className={`${loadingCSS.loadingpost}`}>
      <div className={`${loadingCSS.loadingavatar}`}></div>
      <div className={`${loadingCSS.loadingline}`}></div>
      <div className={`${loadingCSS.loadingline}`}></div>
    </div>
  </div>
)

export default Loading
