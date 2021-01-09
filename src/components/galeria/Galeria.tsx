import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import Carousel from '@brainhubeu/react-carousel';
import galer from './galery.module.scss';
import '@brainhubeu/react-carousel/lib/style.css';

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
            if (e.target.innerWidth < 950) {
                setBreakPoint(true);
            }
        }

        window.addEventListener('resize', updateWidth)

        return () => {
            window.removeEventListener('resize', updateWidth)
        }

    }, [])
    return (
        <section id='galeria' className={galer.galeria}>
            <h2 className={galer.title}>Galeria</h2>
            <Carousel
                arrows={breakPoint ? false : true}
                keepDirectionWhenDragging
                autoPlay={5000}
                animationSpeed={1000}
                slidesPerPage={breakPoint ? 1 : 2}

            >
                {
                    images.map((e, i) => (<img key={i} style={{ borderRadius: "10px", minWidth: "200px", maxWidth: "700px" }}
                        src={`dametumano/${e}`} />))
                }
            </Carousel>

        </section>
    )
}

export default Galeria
