import React, { FC, useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import Carouse from './carousel/Carousel';
import galer from './galery.module.scss'
const Galeria: FC = () => {
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
    const { edges } = allImagesWithoutWEBPExtension;
    const images = []
    edges.forEach((e) => {
        images.push({image:e.node.childImageSharp.fluid.src})
    });

   
    return (
        <section id='galeria' className={galer.galeria}>
            <h2 className={galer.title}>Galeria</h2>

            <Carouse  slides={images}/>
        </section>
    )
}
// {
//     images.map((e, i) => 
//     (<div key={i} > <img style={{ borderRadius: "10px", minWidth: "200px", maxWidth: "700px" }}
//         src={e} /></div>))
// }
export default Galeria