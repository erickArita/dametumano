import React, { useEffect, useState } from "react"

import { graphql, Link, useStaticQuery } from "gatsby"
import Scrollspy from "react-scrollspy"
import Img from "gatsby-image"
import { FaBars, FaFacebook, FaInstagram } from "react-icons/fa"
import navbar from "./navbar.module.scss"
const NavBar = () => {
  const query = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        sharp: childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [showMenu, setShowMenu] = useState(false)
  const handleMenu = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    const updateWidth = () => {
      setShowMenu(false)
    }

    window.addEventListener("resize", updateWidth)

    return () => {
      window.removeEventListener("resize", updateWidth)
    }
  }, [])

  return (
    <nav className={navbar.navbar}>
      <div className={navbar.logo}>
        <Link rel="preload" to="/">
          <Img
            className={navbar.logoItem}
            fixed={query.logo.sharp.fixed}
            alt="logo de dame tu mano"
          />

          <h3 className={navbar.logoName}>{query.site.siteMetadata.title}</h3>
        </Link>
      </div>

      <div
        onClick={handleMenu}
        className={`${navbar.menu} ${showMenu && navbar.active}`}
      >
        <FaBars />
      </div>
      <div className={navbar.socialMedia}>
        <a
          href="https://www.facebook.com/dametumanohn/"
          style={{ color: "black" }}
          target="__black"
        >
          <FaFacebook className={navbar.icon} />
        </a>
        <p>|</p>
        <a
          href="https://www.instagram.com/dametumanohn/"
          style={{ color: "black" }}
          target="__black"
        >
          <FaInstagram className={navbar.icon} />
        </a>
      </div>
      <div
        className={`${navbar.links} ${
          showMenu ? navbar.movileMenu : navbar.movileMenuDisable
        }`}
      >
        <Scrollspy
          items={["header", "nosotros", "galeria"]}
          currentClassName={navbar.activeLink}
        >
          <Link className={navbar.link} to="/#header">
            INICIO
          </Link>
          <Link className={navbar.link} to="#nosotros">
            NOSOTROS
          </Link>
          <Link className={navbar.link} to="#galeria">
            GALERIA
          </Link>
          <Link className={navbar.link} to="#">
            TESTIMONIALES
          </Link>
          <Link className={navbar.link} to="/#contacto">
            CONTACTO
          </Link>
          <Link className={navbar.link} to="/#aa">
            DONAR
          </Link>
        </Scrollspy>
      </div>
    </nav>
  )
}

export default NavBar
