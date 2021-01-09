import React, { ChangeEvent, FC, UIEventHandler, useEffect, useState } from 'react';
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
            <Carousel

                arrows={breakPoint == true ? true : false}
                keepDirectionWhenDragging
                autoPlay={5000}
                animationSpeed={1000}
                slidesPerPage={breakPoint === true ? 2 : 1}
            >
                {
                    images.map((e, i) => (<img key={i} style={{ borderRadius: "10px", minWidth: "200px", maxWidth: "700px" }}
                        src={e} />))
                }
            </Carousel>

        </section>
    )
}

export default Galeria
