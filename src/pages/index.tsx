import React, { useEffect } from "react"
import loadable from "@loadable/component"
import Testimoniales from "../components/Testimoniales/Testimoniales"
import Contacto from "../components/contacto/Contacto"
import Valores from "../components/valores/valores"
const Layout = loadable(() => import("../components/layout"))
const SEO = loadable(() => import("../components/seo"))
const Nosotros = loadable(() => import("../components/nosotros/Nosotros"))
const Footer = loadable(() => import("../components/footer/Footer"))
const Galeria = loadable(() => import("../components/galeria/Galeria"))
import 'aos/dist/aos.css'
import Aos from 'aos'
import Header from "../components/header/Header"
const IndexPage = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
    Aos.refresh()
  }, [])
  return (
    <Layout>
      <SEO
        title="Club Dame Tu Mano"
        lang="es"
        description="Club Dame tu mano es una ONG ubicada en Santa Rita de Copán fundada por un grupo de jovenes para reducir la desigualdad social"
      />
      <Header />
      <Nosotros />
      <Galeria />
      <Testimoniales />
      <Valores />
      <Contacto />
      <Footer />
    </Layout>
  )
}

export default IndexPage
