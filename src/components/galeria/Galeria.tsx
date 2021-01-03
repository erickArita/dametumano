import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image';
import Flickity from 'react-flickity-component';
import galer from './galery.module.scss'
const Galeria = () => {
    const { allImagesWithoutWEBPExtension } = useStaticQuery(graphql`
    query {
        allImagesWithoutWEBPExtension: allFile(
        filter: {
            sourceInstanceName: { eq: "images" }
            extension: { regex: "/webp/" }
        }
    ) {
          edges {
            node {
                id
              childImageSharp {
                fluid(maxWidth:1200,quality: 100){
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
}`)
    const { edges } = allImagesWithoutWEBPExtension




    return (
        <section className={galer.galeria}>
            <h2 className={galer.title}>Galeria</h2>
            <Flickity className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static  >

                {
                    edges.map(({ node }, i) =>
                        <div key={i}>
                            <Image key={i} className={galer.img} fluid={node.childImageSharp.fluid} />
                        </div>
                    )
                }
            </Flickity>
        </section>
    )
}

export default Galeria
