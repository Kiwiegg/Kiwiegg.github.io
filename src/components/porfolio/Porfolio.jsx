import React from 'react'
import './porfolio.css'

const Porfolio = () => {
  return (
    <div id="projects" className='projects__container'>
        <section className='projects__main__container container'>
          <h1 className='projects__title is__hidden'>
            Latest Projects
          </h1>
          <ul className='projects__list'>
            <li itemScope itemType='https://schema.org/CreativeWork'>
                <div className='porfolio__item is__hidden' id='explorify'>
                  <div className='porfolio__item__mask'></div>
                    <div className='porfolio__item__text'>
                      <h2>Explorify</h2>
                      <h5>Personalized Music Playlist Generator</h5>
                      <a href='https://github.com/Kiwiegg/Explorify' target='_blank' className='btn btn-primary'>Github</a>
                    </div>
                </div>
            </li>
            <li itemScope itemType='https://schema.org/CreativeWork'>
                <div className='porfolio__item is__hidden' id='artly'>
                  <div className='porfolio__item__mask'></div>
                    <div className='porfolio__item__text'>
                      <h2>Artly</h2>
                      <h5>Hackathon Winner - Interactive Art Platform</h5>
                      <a href='https://github.com/Kiwiegg/WaffleHacksTeamCLNN' target='_blank' className='btn btn-primary'>Github</a>
                    </div>
                </div>
            </li>
            <li itemScope itemType='https://schema.org/CreativeWork'>
                <div className='porfolio__item is__hidden' id='arclight'>
                  <div className='porfolio__item__mask'></div>
                    <div className='porfolio__item__text'>
                      <h2>Arclight</h2>
                      <h5>Password Manager App</h5>
                      <a href='https://github.com/Kiwiegg/Arclight' target='_blank' className='btn btn-primary'>Github</a>
                    </div>
                </div>
            </li>
            <li itemScope itemType='https://schema.org/CreativeWork'>
                <div className='porfolio__item is__hidden' id='recipeio'>
                    <div className='porfolio__item__mask'></div>
                    <div className='porfolio__item__text'>
                      <h2>Recipe.io</h2>
                      <h5>Discover recipes for your ingredients at hand</h5>
                      <a href='https://github.com/Kiwiegg/Recipe.io' target='_blank' className='btn btn-primary'>Github</a>
                    </div>
                </div>
            </li>
          </ul>
        </section>
    </div>
  )
}

export default Porfolio