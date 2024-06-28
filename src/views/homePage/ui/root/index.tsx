import React from 'react'
import styles from './HomePage.module.scss'
import cs from 'classnames'
import Hero from '../components/hero'

export const HomePage = () => {
  return (
    <main>
        
             <div className={styles.hero} >
              <Hero/>
             </div>
       
    </main>
  )
}
