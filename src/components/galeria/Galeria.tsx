import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {Carousel} from '3d-react-carousal'
import Image from 'gatsby-image'

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
    const slides =[edges.map(({ node },i) =>
        <img key={i} src={node.childImageSharp.fluid.src} />

    )]
    return (
        <section className={galer.galeria}>
            <h2 className={galer.title}>Galeria</h2>

            <Carousel  className={galer.carousel} slides={slides} autoplay={true} interval={1000}  />

        </section>
    )
}

export default Galeria
