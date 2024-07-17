import React from 'react'
import styles from './Experience.module.scss'
import cs from 'classnames'
import Image from 'next/image'

const Experience = () => {
  return (
    <div className={styles.root}  >  
    <div className={cs(styles.inner, 'container')} >
        <div className={styles.description} >
            <h3>We Create Digital Experience</h3>
        </div>
    <Image className={styles.schemeImg} src={'/images/scheme.png'} width={557} height={480} alt='scheme image'/>
    </div>
    </div>
  )
}

export default Experience