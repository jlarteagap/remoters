import React from 'react'
import './post.css'
const Post = () => {
  return (
    <div className="container post">
      <div className="post__card card is-flex">
        <article className="card-content">
          <header className="post__headeris is-flex is-flex-direction-column ">
            <small className="help">Publicado {'update__time'}</small>
            <div className="is-size-5 is-size-7-mobile">
              {'Empresa'} esta buscando un:
            </div>
            <h2 className="is-size-3 is-size-5-mobile has-text-weight-bold">
              {'Titulo'}
            </h2>
          </header>
          <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            tempore optio omnis? Asperiores doloremque expedita earum nulla ipsa
            similique, laudantium voluptates perspiciatis dignissimos veniam
            sapiente ratione alias, impedit temporibus natus! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Autem laudantium quasi cumque
            possimus iste doloremque temporibus iusto nihil vel delectus quam,
            nam non, tempore reprehenderit. Numquam autem illo reiciendis
            eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Delectus sequi vitae distinctio. Aliquam adipisci nam officiis nemo,
            repudiandae autem, sapiente illo delectus, consectetur deserunt ab
            atque. Quas possimus quibusdam repellendus!
          </section>
          <footer className="post__footer mt-6">
            <p className="mb-4 has-text-centered">
              Indica que encontraste el trabajo en Reclutop, esto nos ayuda a
              que más empresas publiquen aquí, ¡gracias!
            </p>
            <a
              href="#enlace"
              className="btn button is-fullwidth mb-4 is-size-5"
            >
              Aplicar ahora
            </a>
            <small className="help">
              Al solicitar empleo, NUNCA debe pagar para postularse. Además,
              NUNCA debería tener que pagar para comprar equipos que luego le
              reembolsarán. Además, nunca pague por los entrenamientos que tiene
              que hacer. ¡Esas son estafas! ¡NUNCA PAGUES POR NADA! Las
              publicaciones que vinculan a páginas con cómo trabajar en línea
              también son estafas. No los uses ni pagues por ellos. Además,
              verifique siempre que realmente está hablando con la empresa en el
              puesto de trabajo y no con un impostor. Una buena idea es
              comprobar el nombre de dominio del sitio/correo electrónico y ver
              si es el nombre de dominio principal de la empresa real. Las
              estafas en el trabajo remoto están muy extendidas, ¡cuidado! Lea
              más para evitar estafas. Al hacer clic en el botón para aplicar
              arriba, saldrá de RECLUTOP e irá a la página de solicitud de
              empleo para esa empresa fuera de este sitio. RECLUTOP no acepta
              responsabilidad alguna como consecuencia de la confianza en la
              información allí (sitios externos) o aquí.
            </small>
          </footer>
        </article>
        <aside className="post__sidebar p-5 mr-5 has-text-centered">
          <section className="post__sidebar-section p-5">
            <figure className="post__sidebar-img"></figure>
            <div className="post__sidebar__title my-5">
              <h3 className="is-size-5 has-text-weight-bold">Empresa</h3>
            </div>
            <a
              href="#"
              className="btn btn--blue is-fullwidth button has-text-weight-medium"
            >
              Aplicar
            </a>
          </section>
        </aside>
      </div>
    </div>
  )
}

export default Post
