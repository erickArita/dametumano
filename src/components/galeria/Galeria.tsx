import React, { FC, useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import Slider from "react-slick";
import moduleName from 'react-slick'
import galer from './galery.module.scss'
import Carouse from './Carousel';
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
        images.push(e.node.childImageSharp.fluid.src)
    });

    const [breakPoint, setBreakPoint] = useState(false)

    useEffect(() => {
        const updateWidth = (e) => {
            if (e.target.innerWidth > 750) {
                setBreakPoint(true);
            } else {
                setBreakPoint(false)
            }
        }

        if (window.innerWidth > 750) {
            setBreakPoint(true);
        } else {
            setBreakPoint(false)
        };

        window.addEventListener('resize', updateWidth)

        return () => {
            window.removeEventListener('resize', updateWidth)
        }

    }, [])
   
    return (
        <section id='galeria' className={galer.galeria}>
            <h2 className={galer.title}>Galeria</h2>
             
        <Carouse/>
        </section>
    )
}
// {
//     images.map((e, i) => 
//     (<div key={i} > <img style={{ borderRadius: "10px", minWidth: "200px", maxWidth: "700px" }}
//         src={e} /></div>))
// }
export default Galeria