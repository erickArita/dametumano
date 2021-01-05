import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image';

import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import galer from './galery.module.scss'
import '@brainhubeu/react-carousel/lib/style.css';

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
                fluid(maxWidth:680,quality:100){
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
}`)
    const { edges } = allImagesWithoutWEBPExtension



    const images = []
    edges.forEach((e, i) => {
        images.push((<img key={i} style={{ borderRadius: "10px", minWidth: "200px", maxWidth: "700px" }} src={e.node.childImageSharp.fluid.src} />))
    });
    return (
        <section className={galer.galeria}>
            <h2 className={galer.title}>Galeria</h2>
            <Carousel
                plugins={[
                    'autoplay',
                    {
                        resolve: autoplayPlugin,
                        options: {
                            interval: 2000,
                        }
                    },
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 2
                        }
                    }
                ]}
                animationSpeed={1000}
           slides={images} /> 
          
        </section>
    )
}

export default Galeria
