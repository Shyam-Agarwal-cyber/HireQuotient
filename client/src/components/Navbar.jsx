import React from 'react'
import './navbar.css';
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
    window.onscroll = ()=>{
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("nav").classList.add("slideUp");
        }
        else{
            document.getElementById("nav").classList.remove("slideUp")
        }
    }
  return (
    <div className='nav' id="nav">
        <div className='nav-comp'>
            <img src='/Notion_logo.png' alt="Notion Logo" className='logo'/>
            <div className='dropdown-container nav-ele'>
                <div>Product</div>
                <FaAngleDown className='arrow'/>
            </div>
            <div className='dropdown-container nav-ele'>
                <div>Download</div>
                <FaAngleDown className='arrow'/>
            </div>
            <div className='dropdown-container nav-ele'>
                <div>Solutions</div>
                <FaAngleDown className='arrow'/>
            </div>
            <div className='dropdown-container nav-ele'>
                <div>Resources</div>
                <div><FaAngleDown className='arrow'/></div>
            </div>
            <div className='nav-ele'>Prices</div>
        </div>
        <div className='nav-comp'>
            <div className='nav-ele'>Request a demo</div>
            <div className='nav-ele vert-line'></div>
            <div className='nav-ele'>Log in</div>
            <button type = 'button' className='nav-ele get-notion-free'>Get Notion Free</button>
        </div>
    </div>
  )
}

export default Navbar
