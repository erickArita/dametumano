
import React from "react"
import loadable from '@loadable/component';
const Navbar = loadable(() => import("./Navbar/Navbar"))
const Header = loadable(() => import("./header/Header"))
import "normalize.css"
import "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <>
      <header >
        <Navbar />
        <Header />
      </header>

      <main>{children}</main>
    </>
  )
}

export default Layout
