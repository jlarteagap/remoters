import React from 'react'

const Post = () => {
  return (
    <div className="container">
      <div className="card p-5">
        <article className="post__body card-content">
          <header className="post__header card-header-title">
            Publicado {'update__time'}
            <div className="is-size-5">{'Empresa'} esta buscando un:</div>
            <h2 className="is-size-2">{'Titulo'}</h2>
          </header>
          <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            tempore optio omnis? Asperiores doloremque expedita earum nulla ipsa
            similique, laudantium voluptates perspiciatis dignissimos veniam
            sapiente ratione alias, impedit temporibus natus!
          </section>
          <footer>Data</footer>
        </article>
        <aside className="post__sidebar">Sidebar</aside>
      </div>
    </div>
  )
}

export default Post
