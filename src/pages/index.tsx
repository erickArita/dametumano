import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
 import Nosotros from "../components/nosotros/Nosotros"
import Footer from "../components/footer/Footer"

const IndexPage = () => (
  <Layout>
    <SEO  />
    <Nosotros />

    <Footer />
  </Layout>
)

export default IndexPage