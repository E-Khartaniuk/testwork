import React from 'react'

import scss from './Hero.module.scss'
import AnchorButton from '../Button/AnchorButton'

function Hero() {
  return (
    <section className={scss.herobg}>
      <div className={scss.hero}>
        <div className={scss.heroContainer}>
          <h1 className={scss.heroTitle}>
            Test assignment for front-end developer
          </h1>
          <p className={scss.heroText}>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <div className={scss.heroButton}>
            <AnchorButton anchor={'#signUpAnchor'} className={`anchorButton`}>
              Sign up
            </AnchorButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
