import React from 'react'
import styles from './SpecializationsDesktop.module.scss'
import Image from 'next/image'
import cs from 'classnames'
import { ISpecialization } from '@/entities/specialization'


const SpecializationsDesktop = ({items}: {items: ISpecialization[]}) => {
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
          <div className={styles.listItemText} >
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      ))
    }
  </div>
  )
}

export default SpecializationsDesktop