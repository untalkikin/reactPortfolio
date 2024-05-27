import React from 'react'
import logo from "../assets/henrydevlogo.png"
import { IconContext } from "react-icons";
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const NavBar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='p-3 flex flex-shrink-0 items-center'>
                <img className='mx-2 w-10' src={logo} alt="Logo of henry" />
            </div>
            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                    <a href="https://www.linkedin.com/in/enriquedltdev/"><FaLinkedin /></a>
                    <a href="https://github.com/untalkikin?"><FaGithub /></a>
                    <a href="https://x.com/JosEnriqueDeL15"><FaSquareXTwitter /></a>
                    <a href="https://www.instagram.com/el.joseph.leyba/"><FaInstagram /></a>
                </div>
            </IconContext.Provider>
        </nav>
    )
}

export default NavBar
