import React from "react"
import loadable from "@loadable/component"
import Testimoniales from "../components/Testimoniales/Testimoniales"
import Contacto from "../components/contacto/Contacto"
const Layout = loadable(() => import("../components/layout"))
const SEO = loadable(() => import("../components/seo"))
const Nosotros = loadable(() => import("../components/nosotros/Nosotros"))
const Footer = loadable(() => import("../components/footer/Footer"))
const Galeria = loadable(() => import("../components/galeria/Galeria"))

const IndexPage = () => (
  <Layout>
    <SEO
      title="Club Dame Tu Mano"
      lang="es"
      description="Club Dame tu mano es una ONG ubicada en Santa Rita de Copán fundada por un grupo de jovenes para reducir la desigualdad social"
    />
    <Nosotros />
    <Galeria />
    <Testimoniales/>
    <Contacto />
    <Footer />
  </Layout>
)

export default IndexPage
