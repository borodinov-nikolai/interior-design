import React from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image'


const Hero = () => {
  return (
    <div className={styles.root} >
        <div className='container' >
          <div className={styles.content} >
            <div className={styles.text} >
              <h1 className={styles.title} >Professional
              Interior Design</h1>
            </div>
              <div className={styles.imageHolder} >
                <Image src={'/images/hero.jpg'} width={800} height={800} alt='hero image' />
              </div>
          
          </div>
        </div>
    </div>
  )
}

export default Hero