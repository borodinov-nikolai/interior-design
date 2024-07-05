import React from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image'


const Hero = () => {
  return (
    <div className={styles.root} >
         
            <div className={styles.text} >
         <div className='container' >
              <h1 className={styles.title} >Professional Interior Design</h1>
          </div>
            </div>
              <div className={styles.imageHolder} >
                <Image src={'/images/hero.jpg'} width={800} height={800} alt='hero image' />
              </div>
          
     
    </div>
  )
}

export default Hero