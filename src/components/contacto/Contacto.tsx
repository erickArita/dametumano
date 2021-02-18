import React from 'react'
import contacto from './contacto.module.scss'
import { FiMail } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import CardContacto from './card/CardContacto'

const Contacto = () => {
    return (
        <section id='contacto' className={contacto.contacto}>
            <h2 className={contacto.title}>Contacto</h2>
            <div className={contacto.flexContainer}>
                <CardContacto
                    head={<FiMail />}
                    body={
                        <a href="mailto:dametumanohn@hotmail.com">
                            dametumanohn@hotmail.com
                        </a>
                    }
                />
                <CardContacto
                    head={<FaFacebook />}
                    href="https://www.facebook.com/dametumanohn/"
                />
                <CardContacto
                    head={<FaWhatsapp />}
                    body={<>
                        <li>97247753</li>
                        <li>95953577</li>
                    </>
                    }
                />
                <CardContacto
                    head={<FaInstagram />}
                    href="https://www.instagram.com/dametumanohn/"
                />
            </div>
        </section>
    )
}

export default Contacto
