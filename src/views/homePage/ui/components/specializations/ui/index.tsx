'use client'
import React from 'react'
import styles from './Specializations.module.scss'
import Image from 'next/image'
import cs from 'classnames'







const items = [
  {
    id: 1,
    image: '/images/spec_image_1.jpg',
    title: 'Floor plan',
    description: 'Tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    image: '/images/spec_image_2.jpg',
    title: 'Interior Design',
    description: 'Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad'
  },
  {
    id: 3,
    image: '/images/spec_image_3.jpg',
    title: 'Architecture Design',
    description: 'Tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 4,
    image: '/images/spec_image_4.jpg',
    title: 'Construction',
    description: 'Tempor incididunt ut labore et dolore magna aliqua.'
  },
]

export const Specializations = () => {





  return (
    <div className={styles.root} >
      <div className={styles.title} >
        <p>TOP SERVICES</p>
        <h2>Our Specializations</h2>
      </div>
      {
        items?.map(({id, image, title, description})=> (
          <div data-aos="fade-up" data-aos-duration="2000" className={cs(styles.listItem, styles[`listItem${id}`])} key={id} >
            <Image src={image} width={300} height={500} alt='specialization image'/>
          </div>
        ))
      }
    </div>
  )
}
