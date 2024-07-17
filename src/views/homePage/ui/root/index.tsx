import React from 'react'
import styles from './HomePage.module.scss'
import Hero from '../components/hero'
import SpecializationsDesktop from '../components/specializationsDesktop'
import { specializationsList } from '../../constants/specializationsList'
import SpecializationsMobile from '../components/specializationsMobile'
import AboutUs from '../components/aboutUs'
import OurProjects from '../components/ourProjects'
import { ourProjects } from '../../constants/ourProjects'
import Experience from '../components/experience'


export const HomePage = () => {
  return (
    <main className={styles.root} >

      <section className={styles.hero} >
        <Hero />
      </section>

      <section className={styles.specializations} >
        <div className={styles.specializationsDesktop} >< SpecializationsDesktop items={specializationsList} /></div>
        <div className={styles.specializationsMobile} ><SpecializationsMobile items={specializationsList} /></div>
      </section>
      
        <section className={styles.aboutUs} ><AboutUs/></section>
        <section className={styles.ourProjects} ><OurProjects projects={ourProjects} /></section>
        <section className={styles.experience}><Experience/></section>
      
    </main>
  )
}
