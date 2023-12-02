import React from 'react'
import { BiRightArrowAlt } from "react-icons/bi";
import "./partners.css"

const Partners = () => {
  return (
    <div className='partners'>
      <div className='partner-text'>
        <div className='headline'>Millions run on Notion every day</div>
        <div className='tagline'>Powering the world’s best teams, from next-generation startups to established enterprises.</div>
        <button className='read-stories'>
          <div className='read-stories-content'>
            Read Customer Stories 
            <div className='read-stories-arrow'>
              <BiRightArrowAlt /> 
            </div>
          </div>
        </button>
      </div>
      <div className='logo-container'>
        <div><img src='/figma-logo.png' alt="Logo" className='partner-logo' style={{ maxWidth: '87px' }}/></div>
        <div><img src='/pixar-logo.png' alt="Logo"  className='partner-logo' style={{ maxWidth: '109px' }}/></div>
        <div><img src='/doordash-logo.png' alt="Logo"  className='partner-logo' style={{ maxWidth: '135px' }}/></div>
        <div><img src='/nike-logo.png' alt="Logo"  className='partner-logo' style={{ maxWidth: '83px' }}/></div>
        <div><img src='/amazon-logo.png' alt="Logo"  className='partner-logo' style={{ maxWidth: '90px' }}/></div>
        <div><img src='/pinterest-logo.png' alt="Logo"  className='partner-logo' style={{ maxWidth: '98px' }}/></div>
        <div><img src='/ge-logo.png' alt="Logo"  className='partner-logo' style={{ maxWidth: '50px' }}/></div>
        <div><img src='/uber-logo.png' alt="Logo"  className='partner-logo' style={{ maxWidth: '84px' }}/></div>
        <div><img src='/plaid-logo.png' alt="Logo"  className='partner-logo' style={{ maxWidth: '82px' }}/></div>
        <div><img src='/toyota-logo.png' alt="Logo"  className='partner-logo' style={{ maxWidth: '96px' }}/></div>
        <div><img src='/snowflake-logo.png' alt="Logo"  className='partner-logo' style={{ maxWidth: '101px' }}/></div>
        <div><img src='/headspace-logo.png' alt="Logo" className='partner-logo' style={{ maxWidth: '106px' }}/></div>
        <div><img src='/angellist-logo.png' alt="Logo"  className='partner-logo' style={{ maxWidth: '104px' }}/></div>
        <div><img src='/robinhood-logo.png' alt="Logo"  className='partner-logo' style={{ maxWidth: '97px' }}/></div>
      </div>
      <div className='partner-grid'>
        <div className='text-pencil'>
          <div className='partner-grid-text'>
            <div>Consolidate tools.</div>
            <div>Cut costs.</div>
          </div>
          <div className='grid-pencil'> <img src="./giant-pencil-illustration.png" alt="giant-pencil"/></div>
        </div>
        <div className='image-container'>
          <img src="./tools-before-notion-V2.png" alt="tools-before-notion" className='image1'/>
          <img src="./tools-strikethrough-V2.png" alt="tools-strikethrough-V2" className='image2'/>
        </div>
      </div>
    </div>
  )
}

export default Partners
