import React from 'react'
import styles from './AboutUs.module.scss'
import Image from 'next/image'
import cs from 'classnames'
import LineSvg from '@/shared/svg/line'

const AboutUs = () => {
  return (
    <div className={styles.root} > 
      <div className={cs(styles.inner, 'container')}>
        <div className={styles.text} >
          <h2>About Us</h2>
          <p>As development continues, engineers may visit building destinations to guarantee that temporary workers pursue the plan, keep to the timetable, utilize the predefined materials, and meet work-quality models.</p>
        </div>
        <div className={styles.gallery} >
          <div className={styles.gallery_imageHolder1} >
            <Image className={cs(styles.gallery_image, styles.gallery_image1)} src='/images/aboutUs_2.jpg' width={300} height={500} alt='about us gallery image' />
          </div>
          <div className={styles.gallery_imageHolder2} >
            <Image className={cs(styles.gallery_image, styles.gallery_image2)} src='/images/aboutUs_3.jpg' width={300} height={500} alt='about us gallery image' />
          </div>
        </div>
        <div className={styles.satisfiedClients} >
          <div className={styles.satisfiedClients_text} >
            <p><span>85%</span>Satisfied Clients</p>
          </div >
          <Image className={styles.satisfiedClients_image} src='/images/aboutUs_1.jpg' width={408} height={175} alt='satisfied clients image' />
          <div className={styles.satisfiedClients_readmoreImageHolder} >
            <Image src='/images/about_us_readmore.png' width={151} height={151} alt='read more image' />
            <Image className={styles.satisfiedClients_starImage} src='/images/about_us_star.png' width={37} height={37} alt='read more star image' />
          </div>
        </div>
      </div>
      <div className={styles.lineSvgHolder} ><LineSvg/></div>
    </div>
  )
}

export default AboutUs