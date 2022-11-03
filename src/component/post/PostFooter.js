/* eslint-disable react/prop-types */
import React from 'react'
import PostCSS from '@public/css/Post.module.css'

export const PostFooter = ({ link }) => {
  return (
    <footer className={`${PostCSS.post__footer} mt-6`}>
      <p className="mb-4 has-text-centered">
        Indica que encontraste el trabajo en Reclutop, esto nos ayuda a que más
        empresas publiquen aquí, ¡gracias!
      </p>
      <a
        href={link}
        target="blank"
        className="btn button is-fullwidth mb-4 is-size-5"
      >
        Aplicar ahora
      </a>
      <small className="help">
        Al solicitar empleo, NUNCA debe pagar para postularse. Además, NUNCA
        debería tener que pagar para comprar equipos que luego le reembolsarán.
        Además, nunca pague por los entrenamientos que tiene que hacer. ¡Esas
        son estafas! ¡NUNCA PAGUES POR NADA! Las publicaciones que vinculan a
        páginas con cómo trabajar en línea también son estafas. No los uses ni
        pagues por ellos. Además, verifique siempre que realmente está hablando
        con la empresa en el puesto de trabajo y no con un impostor. Una buena
        idea es comprobar el nombre de dominio del sitio/correo electrónico y
        ver si es el nombre de dominio principal de la empresa real. Las estafas
        en el trabajo remoto están muy extendidas, ¡cuidado! Lea más para evitar
        estafas. Al hacer clic en el botón para aplicar arriba, saldrá de
        RECLUTOP e irá a la página de solicitud de empleo para esa empresa fuera
        de este sitio. RECLUTOP no acepta responsabilidad alguna como
        consecuencia de la confianza en la información allí (sitios externos) o
        aquí.
      </small>
    </footer>
  )
}
