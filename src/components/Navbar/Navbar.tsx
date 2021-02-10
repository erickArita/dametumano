import React, { useEffect, useState } from "react"

import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FaBars, FaFacebook, FaInstagram } from "react-icons/fa"
import navbar from "./navbar.module.scss"
import Navigation from "./navigation/Navigation"
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
        const toggleMenu = () => {
            setShowMenu(false)
        }

        window.addEventListener("resize", toggleMenu)
        window.addEventListener("scroll", toggleMenu)

        return () => {
            window.removeEventListener("resize", toggleMenu)
            window.removeEventListener("scroll", toggleMenu)
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
                onClick={handleMenu}
                className={`${navbar.menu} ${showMenu && navbar.active}`}
            >
                <FaBars />
            </div>
            <Navigation
                showMenu={showMenu}
                links={["INICIO", "NOSOTROS", "GALERIA", "TESTIMONIALES", "CONTACTO"]}
            />
        </nav>
    )
}

export default NavBar
