import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zpwtzqj', 'template_lgrhsft', form.current, 'Ow4k9CRaZ530VyNQM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <HiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>larrywutoronto@gmail.com</h5>
            </article>
            <article className='contact__option'>
              <BsLinkedin className='contact__option-icon'/>
              <h4>LinkedIn</h4>
              <a href='https://www.linkedin.com/in/larry-wu/' target="_blank" rel="noopener noreferrer" >Connect with Me</a>
            </article>
            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <a href='https://m.me/larry.wu.1671' target="_blank" rel="noopener noreferrer">Send Me a Message</a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required></input>
            <input type="email" name='email' placeholder='Your Email' required></input>
            <textarea name='message' rows="12" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
    </section>


  )
}

export default Contact