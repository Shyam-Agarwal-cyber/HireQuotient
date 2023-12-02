import React from 'react'
import './buildingblocks.css'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";

const BuildingBlocks = () => {
  return (
    <div>
      <div className='meta-lab'>
        <div className='metalab-quote'>
          "We got rid of nearly a dozen different tools because of what Notion does for us."
        </div>
        <div className='logo-person'>
          <div className='metalab-logo'> <img src='metalab.png' alt='metalab-logo' /> </div>
          <div className='metalab-exec'>
            <div className='metalab-exec-name'>Justin Watt</div>
            <div className='metalab-exec-designation'>Director of Ops & Marketing, MetaLab</div>
          </div>
        </div>
      </div>
      <div className='top-peek'>
        <div> <img src='topPeekI.png' alt='top-peek' /></div>
        <div className='top-peek-text'> Powerful Building Blocks </div>
      </div>
      <div>
      </div>
      <div className='customize-build'>
        <div className='customize'> 
          <div className='customize-build-toodle' style={{color: "#0a85d1"}}> <MdOutlineRemoveRedEye size={32}/> </div>
          <div className='customize-build-title'> Customize the info you track </div>
          <div className='customize-build-desc'> Create your own labels, tags, owners, and more, so everyone has context and everything stays organized. </div>
          <div> <img src='customize-info.png' alt='customize-info' className='customize-build-image'/> </div>
        </div>
        <div className='build'> 
          <div style={{color: "#0a85d1"}}> <IoColorPaletteOutline size={32}/> </div>
          <div className='customize-build-title'> Build any page, communicate any idea </div>
          <div className='customize-build-desc'> Everything is drag and drop in Notion — images, toggles, to-do’s, even embedded databases. </div>
          <div> <img src='build-any-page-communicate-any-idea.png' alt='build-any-page-communicate-any-idea' className='customize-build-image'/> </div>
        </div>
      </div>
      <div className='match-group'>
        <div className='match-group-quote'>
          "Notion adapts to your needs. It’s as minimal or as powerful as you need it to be."
        </div>
        <div className='logo-person'>
          <div className='match-group-logo'> <img src='match-group.png' alt='match-group-logo' /> </div>
          <div className='match-group-exec'>
            <div className='match-group-exec-name'>Rahim Makani</div>
            <div className='match-group-exec-designation'>Director of Product, Matchgroup</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuildingBlocks
