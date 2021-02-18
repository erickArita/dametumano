import { Link } from 'gatsby'
import React from 'react'
import Scrollspy from 'react-scrollspy'
import navigation from './navigation.module.scss'

interface links {
    showMenu: boolean;
    links: Array<string>;
}
const Navigation = ({ showMenu, links }: links) => {
    return (
        <div
            className={`${navigation.links}
                 ${showMenu ? navigation.movileMenu : navigation.movileMenuDisable}`}
        >
            <Scrollspy
                items={["inicio", "nosotros", "galeria", "testimoniales", "contacto"]}
                currentClassName={navigation.activeLink}>
                {
                    links.map((link) =>
                        <Link key={link} className={navigation.link} to={`/#${link.toLowerCase()}`}>
                            {link}
                        </Link>
                    )
                }
            </Scrollspy>
        </div>
    )
}

export default Navigation
