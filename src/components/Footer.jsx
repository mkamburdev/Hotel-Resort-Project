import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { RiMailSendLine } from "react-icons/ri";
import logo from "../images/logo.png"
import "../components/Footer.css"


function Footer() {
    return (
        <>  <footer className='footer'>
            <img className='logo-bild' src={logo}alt="logo-bild" />
            <div className='footer-container_1'>
                <p>Relax in a Serene and Tranquil Paradise</p>
                <button className='button-icon'>< RiFacebookFill /></button><button className='button-icon button-icon2'><IoLogoInstagram /></button> </div>
                <div className='footer-container_2'>
                    <h4 className='contacttext'>CONTACT US</h4>
                    <p><BsTelephone /> (+49 30) 321 84 21</p>
                    <p><MdOutlineMail />  hayadmu@gmail.com</p>
                    <p><CiLocationOn /> Lindenerstr 5,12345 Berlin <p className='land'>Deutschland</p>  </p>

                   
                </div>
                <div className='footer-container_3'>
                <h4 className='newlatesttext'>NEW LATEST</h4>
                <p>Get the latest updates and offers.</p>
                <form  className='form-email'>
                 <input type="email" name="email" id="email" placeholder='Email...' /><button className='email'><RiMailSendLine /></button>
                </form>

                </div>


        </footer>   </>

    )
}

export default Footer