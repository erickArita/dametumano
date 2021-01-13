import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

import header from './header.module.scss'
import Image from 'gatsby-image'
const Header = () => {

	const data = useStaticQuery(graphql`
    query{
		desktopImage:file(relativePath:{eq:"header.jpg"}){
        childImageSharp:childImageSharp { 
          fluid(maxWidth:1200,quality: 70){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobileImage:file(relativePath:{eq:"header.jpg"}){
        childImageSharp:childImageSharp { 
          fluid(maxWidth:550,quality: 70){
            ...GatsbyImageSharpFluid_withWebp
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
		<div id='header' className={header.header}>

			<div className={header.images} >
				<Image fluid={sources} className={header.img} />


				<div className={header.filtro}>

				</div>

				<div className={header.textos}>
					<div className={header.textContainer}>

						<h1 className={header.title} >Bienvenido a Club Dame tu Mano</h1>
						<p className={header.parrafo} >Somos un grupo de jóvenes dispuestos  a trabajar por una sociedad más justa y fraterna para todos.</p>
					</div>
					<Link to='/#unete' className={header.button} >Únete</Link>
				</div>
			</div>
		</div>
	)
}


export default Header