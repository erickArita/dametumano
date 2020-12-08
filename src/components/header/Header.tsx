import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import header from './header.module.scss'
import Image from 'gatsby-image'
const Header = () => {
  const data = useStaticQuery(graphql`
  query{
    image:file(relativePath:{eq:"header.jpg"}){
      sharp:childImageSharp { 
        fluid(maxWidth:1200){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  return (
    <div id='header' className={header.header}>

      <div className={header.images} >
        <Image fluid={data.image.sharp.fluid} className={header.img} />


        <div className={header.filtro}>

        </div>

        <div className={header.textos}>
          <div className={header.textContainer}>

            <h1 className={header.title} >Bienvenido a Club Dame tu Mano</h1>
            <p className={header.parrafo} >Somos un grupo de jóvenes dispuestos  a trabajar por una sociedad más justa y fraterna para todos.</p>
          </div>
          <Link to='/#donar' className={header.button} >Donar</Link>
        </div>
      </div>
    </div>
  )
}


export default Header