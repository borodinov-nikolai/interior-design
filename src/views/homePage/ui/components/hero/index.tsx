import React from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image'
import LineSvg from '@/shared/svg/line'
import HeroTextSvg from '@/shared/svg/heroText'


const Hero = () => {
  return (
    <div className={styles.root} >
         
            <div className={styles.text} >
         <div className='container' >
              <h1 className={styles.title} >Professional Interior Design</h1>
              <div className={styles.lineSvg} ><LineSvg/></div>
              <div className={styles.heroTextSvg} ><HeroTextSvg/></div>
          </div>
            </div>
              <div className={styles.imageHolder} >
                <Image src={'/images/hero.jpg'} width={800} height={800} alt='hero image' />
              </div>
          
     
    </div>
  )
}

export default Hero