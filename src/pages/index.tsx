import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nosotros from "../components/nosotros/Nosotros"
import Footer from "../components/footer/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Club Dame Tu Mano" lang='es'  description="Club Dame tu mano es una ONG ubicada en Santa RIta de Copán fundada por un grupo de jovenes para reducir la desigualdad social" />
    <Nosotros />

    <Footer />
  </Layout>
)

export default IndexPage
