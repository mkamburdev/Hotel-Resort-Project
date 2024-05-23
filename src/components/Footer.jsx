import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { RiMailSendLine } from "react-icons/ri";

function Footer() {
    return (
        <>  <footer className='footer'>
            <div className='footer-container_1'><h3>Hayadmu</h3>
                <p>Relax in a Serene and Tranquil Paradise</p>
                <p>< RiFacebookFill /><IoLogoInstagram /></p> </div>
                <div className='footer-container_2'>
                    <h4 className='contacttext'>CONTACT US</h4>
                    <p><BsTelephone /> 0945 635 0078</p>
                    <p><MdOutlineMail /> Hayadmu@gmail.com</p>
                    <p><CiLocationOn /> Lindenerstr 5,12345 Berlin <p className='land'>Deutschland</p>  </p>

                   
                </div>
                <div className='footer-container_3'>
                <h4 className='newlatesttext'>NEW LATEST</h4>
                <p>Get the latest updates and offers.</p>
                <form >
                 <input type="email" name="email" id="email" placeholder='Email...' /><button><RiMailSendLine /></button>
                </form>

                </div>


        </footer>   </>

    )
}

export default Footer