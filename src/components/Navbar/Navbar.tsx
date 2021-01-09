import React, { useEffect, useState } from 'react'

import navbar from './navbar.module.scss'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Scrollspy from 'react-scrollspy'
import Img from 'gatsby-image'
import { FaBars, FaFacebook, FaInstagram } from 'react-icons/fa';
const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        const updateWidth = () => {
            setShowMenu(false)
        }

        window.addEventListener('resize', updateWidth)

        return () => {
            window.removeEventListener('resize', updateWidth)
        }

    }, [])

    const query = useStaticQuery(graphql`
    query {
      logo:file(relativePath: { eq: "logo.png" }) {
       sharp: childImageSharp {
          fixed (width: 70, height: 70){
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
    return (
        <nav className={navbar.navbar} >
            <div className={navbar.logo}>
                <Link rel='preload' to='/' >
                    <Img className={navbar.logoItem}
                        fixed={query.logo.sharp.fixed} alt="logo de dame tu mano" />

                    <h3 className={navbar.logoName}>{query.site.siteMetadata.title}</h3>
                </Link>

            </div>

            <div onClick={() => handleMenu()} className={`${navbar.menu} ${showMenu && navbar.active}`} >
                <FaBars />
            </div>
            <div className={navbar.socialMedia}   >
                <FaFacebook className={navbar.icon} />
                <p>|</p>
                <FaInstagram className={navbar.icon} />
            </div>
            <div className={`${navbar.links} ${showMenu ? navbar.movileMenu : navbar.movileMenuDisable}`} >
                <Scrollspy items={['header', 'nosotros', 'section-3']} currentClassName={navbar.activeLink} >

                    <Link className={navbar.link} to='/'>INICIO</Link>
                    <Link className={navbar.link} to='#nosotros'>NOSOTROS</Link>
                    <Link className={navbar.link} to='#galeria'>GALERIA</Link>
                    <Link className={navbar.link} to='#'>TESTIMONIALES</Link>
                    <Link className={navbar.link} to='/#contacto'>CONTACTO</Link>
                    <Link className={navbar.link} to='/#aa'>DONAR</Link>

                </Scrollspy>

            </div>
        </nav>


    )
}

export default NavBar
