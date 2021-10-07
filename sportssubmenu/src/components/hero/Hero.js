import React from 'react'
import { useAContext } from '../context/Context'


const Hero = () => {
  const { closeSubmenu } = useAContext()
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Sports</h1>
          <p>This applications presents all of the Baseball Teams, Basketball
            Teams and Football Teams. Every team will have its own information.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Hero
