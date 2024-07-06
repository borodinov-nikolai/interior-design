import React from 'react'
import styles from './Hero.module.scss'
import Image from 'next/image'
import LineSvg from '@/shared/svg/line'
import HeroTextSvg from '@/shared/svg/heroText'
import Button from '@/shared/ui/button'
import StarsSvg from '@/shared/svg/stars'


const Hero = () => {
  return (
    <div className={styles.root} >
         
            <div className={styles.text} >
         <div className='container' >
              <p className={styles.topTitle} >Architecture designe</p>
              <h1 className={styles.title} >Professional Interior Design
              <div className={styles.starsSvg} > <StarsSvg/> </div>
              </h1>
              <p className={styles.description} > Design for now with the awareness of yesterday and unknown tomorrow. Because small details make the perfect design. Helping you choose between good and best. </p>
              <div className={styles.btn} ><Button>Lets work together</Button></div>
       
          </div>

            </div>
              <div className={styles.imageHolder} >
                <Image src={'/images/hero.jpg'} width={800} height={800} alt='hero image' />
              </div>
          
              <div className={styles.lineSvg} ><LineSvg/></div>
              <div className={styles.heroTextSvg} ><HeroTextSvg/></div>
    </div>
  )
}

export default Hero