import React from "react"
import footer from './footer.module.scss'
const Footer = () => {
  return (
    <footer className={footer.container}>
      <p>CopyRight © {new Date().getFullYear()}, Club Dame Tu Mano</p>
      
    </footer>
  )
}

export default Footer
