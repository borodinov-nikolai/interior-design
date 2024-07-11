'use client'
import 'swiper/css'
import 'swiper/css/free-mode';
import React from 'react'
import styles from './SpecializationsMobile.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { FreeMode } from 'swiper/modules'
import { ISpecialization } from '@/entities/specialization';

const SpecializationsMobile = ({items}: {items: ISpecialization[]}) => {
  return (
    <div className={styles.root} >

      <div className={styles.title} >
        <div className="container">
          <p>Our Specializations</p>
          <h2>TOP SERVICES</h2>
        </div>
      </div>

      <Swiper
       modules={[FreeMode]}
       slidesPerView={'auto'}
       freeMode={true}
       spaceBetween={10}
       className={styles.slider} >
        {
          items?.map(({id, title, description, image})=> (
            <SwiperSlide key={id} className={styles.slide} >
              <Image src={image} width={320} height={412} alt='specializations slide image'/>
              <div className={styles.slideText} >
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

    </div>
  )
}

export default SpecializationsMobile