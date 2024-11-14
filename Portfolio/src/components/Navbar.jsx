import logo from '../assets/kevinRushLogo.png'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className='mb-16 flex items-center justify-between py-6'>

            <div className='flex flex-shrink-0 items-center'>
                <img className='mx-2 w-10' src={logo} alt="logo" />
            </div>
            <div className='flex gap-3 m-3 items-center justify-center text-2xl cursor-pointer'>
                <FaLinkedin onClick={() => {
                    window.location.href('https://www.linkedin.com')
                }} />
                <FaGithub />
                <FaInstagram />
                <FaSquareXTwitter />
            </div>
        </div>
    )
}


export default Navbar