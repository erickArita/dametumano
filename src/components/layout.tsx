import React from "react"
import Navbar from "./Navbar/Navbar"
import Header from "./header/Header"
import "normalize.css"
import "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
 
      </header>

      <main>{children}</main>
    </>
  )
}

export default Layout
