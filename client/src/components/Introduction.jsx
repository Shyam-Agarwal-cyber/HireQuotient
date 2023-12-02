import React from 'react'
import "./introduction.css"
import { BiRightArrowAlt } from "react-icons/bi";

const Introduction = () => {
  return (
    <div className='introduction'>
      <div className='catchphrase'>Write, plan, share. </div>
      <div className='catchphrase'>With AI at your side.</div>
      <div className='info'>Notion is the connected workspace where better, faster work happens.</div>
      <button type = 'button' className='get-button'>
        <div className='btn-content'>Get Notion Free<div> <BiRightArrowAlt/></div> </div> 
      </button>
      <img src='/home-hero.png' alt="Home Hero" className='home-hero'/>
      <div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Introduction
