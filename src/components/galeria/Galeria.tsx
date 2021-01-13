import React, { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Carouse from "./carousel/Carousel"
import galer from "./galery.module.scss"
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
              fluid(maxWidth: 750, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const { edges } = allImagesWithoutWEBPExtension
  const images = []
  edges.forEach(e => {
    images.push({ image: e.node.childImageSharp.fluid.src })
  })

  return (
    <section id="galeria" className={galer.galeria}>
      <h2 className={galer.title}>Galeria</h2>

      <Carouse slides={images} />
    </section>
  )
}
export default Galeria
