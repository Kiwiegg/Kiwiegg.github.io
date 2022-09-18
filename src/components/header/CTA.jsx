import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} target='_blank' className='btn btn-primary' rel="noopener noreferrer">Download CV</a>
        <a href="#contact" className='btn'>Connect With Me!</a>
      </div>
  )
}

export default CTA