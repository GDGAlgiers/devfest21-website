import { Link } from "gatsby"
import React from "react"
import devfestLogo from "../images/logo.png"

// Icons
import { AiFillTwitterCircle } from 'react-icons/Ai';

import {FaFacebook,FaInstagram,FaTwitterSquare,FaYoutube} from 'react-icons/fa'
import ScrollButton from "./ScrollButton";
const Footer = () => {
   
    return ( 
        <div className="footer font-body .text-6xl w-full my-0 pt-8 pb-1 bg-primary text-white list-none text-lg mt-0 mb-0" >
            <ScrollButton />
           
            <img src={devfestLogo} alt="" className="m-auto h-14"/>
            <ul  className="invisible h-0 md:h-5 flex md:visible justify-between  w-1/2 m-auto md:mt-6 ">
                <li><Link className="wt-6 " to="#about" >About</Link></li>
                <li><Link className="wt-6" to="#event">Event</Link></li>
                <li><Link className="wt-6" to="#speakers">Speakers</Link></li>
                <li><Link className="wt-6" to="#sponsors">Sponsors</Link></li>
                <li><Link className="wt-6" to="#contact">Contact</Link></li>
            </ul>
            <ul  className="flex justify-between  m-auto mt-6 w-2/3 md:w-1/4 lg:w-1/4 xl:w-1/4">
                <li><Link target={"_blank"} to="https://web.facebook.com/GDGAlgiers"><FaFacebook className="text-3xl"/></Link></li>
                <li><Link target={"_blank"} to="https://www.instagram.com/gdg_algiers/"><FaInstagram className="text-3xl"/></Link></li> 
                <li><Link target={"_blank"} to="https://twitter.com/gdg_algiers"><AiFillTwitterCircle  className="text-3xl"/></Link></li>
                <li><Link  target={"_blank"} to="https://www.youtube.com/channel/UCoIJqAgLunK3MJLgf28W5hg"><FaYoutube className="text-3xl"/></Link></li> 
            </ul>
            <p className="text-sm m-auto mt-6">Copyright &copy; 2021. All rights reserved </p>
        </div>
     );
}
 
export default Footer;