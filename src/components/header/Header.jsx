import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

import ME from '../../assets/me.png'
import { TypeAnimation } from 'react-type-animation';

const DescriptionText = () => {
  return <TypeAnimation
  // Same String at the start will only be typed once, initially
  sequence={[
  'Software Developer',
  1500,
  'K-pop Enthusiast',
  1500,
  'Avid Learner',
  1500,
  'Code Lover',
  1500,
  ]}
  speed={30} // Custom Speed from 1-99 - Default Speed: 40
  wrapper="span" // Animation will be rendered as a <span>
  repeat={Infinity} // Repeat this Animation Sequence infinitely
/>
}

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='header__main__container'>
          <h1>Larry Wu</h1>
          <div className='description__text'>
            <DescriptionText />
          </div>
          <CTA />
        </div>
        <HeaderSocials />

        <a href="#projects" className='scroll__down arrow'>Projects</a>

      </div>
    </header>
  )
}


export default Header