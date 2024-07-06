import React from 'react'
import styles from './HomePage.module.scss'
import cs from 'classnames'
import Hero from '../components/hero'
import { Specializations } from '../components/specializations'

export const HomePage = () => {
  return (
    <main>

      <section className={styles.hero} >
        <Hero />
      </section>

      <section className={styles.specializations} >
        <Specializations />
      </section>
      
    </main>
  )
}
