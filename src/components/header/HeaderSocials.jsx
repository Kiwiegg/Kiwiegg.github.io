import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/larry-wu/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/Kiwiegg" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://www.facebook.com/larry.wu.1671/" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials