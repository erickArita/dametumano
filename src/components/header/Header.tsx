import React, { useEffect } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import header from "./header.module.scss"
import Image from "gatsby-image"
import Aos from 'aos'
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      desktopImage: file(relativePath: { eq: "header.jpg" }) {
        childImageSharp: childImageSharp {
          fluid(maxWidth: 1000, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(relativePath: { eq: "header.jpg" }) {
        childImageSharp: childImageSharp {
          fluid(maxWidth: 768, quality: 70) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

 
  return (

    <div id="inicio" className={header.header}>
      <div className={header.images}>
        <Image fluid={sources} className={header.img} />

        <div className={header.filtro}></div>

        <div  className={`${header.textos}  `}>
          <div className={header.textContainer}>
            <h1 className={header.title}>Bienvenido a Club Dame tu Mano</h1>
            <p className={header.parrafo}>
              Somos un grupo de jóvenes dispuestos a trabajar por una sociedad
              más justa y fraterna para todos.
            </p>
          </div>
          <Link to="/#contacto" className={header.button}>
            Contáctanos
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
