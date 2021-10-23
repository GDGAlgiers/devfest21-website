import { Link } from 'gatsby'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import devfestLogo from '../../images/logo.svg'

const Footer = () => {
    return (
        <div className="footer font-body w-full my-0 py-4 bg-bleuDfest text-white-default list-none text-lg mt-0 mb-0">
            <img src={devfestLogo} alt="Devfest Logo" className="m-auto h-14" />
            <ul className="flex justify-between  m-auto mt-6 w-2/3 md:w-1/4 lg:w-1/4 xl:w-1/4">
                <li>
                    <Link
                        target="_blank"
                        to="https://web.facebook.com/GDGAlgiers"
                    >
                        <FaFacebook className="text-3xl" />
                    </Link>
                </li>
                <li>
                    <Link
                        target="_blank"
                        to="https://www.instagram.com/gdg_algiers/"
                    >
                        <FaInstagram className="text-3xl" />
                    </Link>
                </li>
                <li>
                    <Link target="_blank" to="https://twitter.com/gdg_algiers">
                        <FaTwitter className="text-3xl" />
                    </Link>
                </li>
                <li>
                    <Link
                        target="_blank"
                        to="https://www.youtube.com/channel/UCoIJqAgLunK3MJLgf28W5hg"
                    >
                        <FaYoutube className="text-3xl" />
                    </Link>
                </li>
            </ul>
            <p className="text-sm text-center mt-6">
                Copyright &copy; 2021. All rights reserved{' '}
            </p>
        </div>
    )
}

export default Footer
