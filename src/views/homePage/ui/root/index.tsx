import React from 'react'
import styles from './HomePage.module.scss'
import Hero from '../components/hero'
import SpecializationsDesktop from '../components/specializationsDesktop'
import { specializationsList } from '../../constants/specializationsList'
import SpecializationsMobile from '../components/specializationsMobile'
import AboutUs from '../components/aboutUs'


export const HomePage = () => {
  return (
    <main>

      <section className={styles.hero} >
        <Hero />
      </section>

      <section className={styles.specializations} >
        <div className={styles.specializationsDesktop} >< SpecializationsDesktop items={specializationsList} /></div>
        <div className={styles.specializationsMobile} ><SpecializationsMobile items={specializationsList} /></div>
      </section>
      
        <section className={styles.aboutUs} ><AboutUs/></section>
      
    </main>
  )
}
