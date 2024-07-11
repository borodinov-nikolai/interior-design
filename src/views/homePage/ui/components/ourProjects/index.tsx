'use client'
import React, { useState } from 'react'
import styles from './OurProjects.module.scss'
import cs from 'classnames'
import Image from 'next/image'
import { IProject } from '@/entities/project'



const tabsList = [
  {id: 1,
   text: 'All'
  },
  {id: 2,
   text: 'Architecture'
  },
  {id: 3,
   text: 'Construction'
  },
  {id: 4,
   text: 'Interior Design'
  },
]


const OurProjects = ({projects}: {projects: IProject[]}) => {
  const [activeTab, setActiveTab] = useState<number>(1)


  const hadleChange = (value: number)=> {
    setActiveTab(value)
  }

  return (
    <div className={styles.root} >
      <div className={cs(styles.inner, 'container')} >
        <div className={styles.header} >
          <div className={styles.title} >
            <p>OUR PROJECTS</p>
            <h2>Our Latest Projects</h2>
          </div>
          <ul className={styles.navbar} >
               {
                tabsList.map(({id, text})=> (
                  <li onClick={()=> hadleChange(id)} className={cs(styles.navbarItem, id === activeTab && styles.navbarItem__active)}  key={id} >{text}</li>
                ))
               }
          </ul>
        </div>
        <div className={styles.galleryHolder} >
          <ul className={styles.gallery} >
            {
              projects?.map(({id, image})=> (
                <li key={id} >
                  <Image src={image} width={189} height={280} alt='our projects gallery image'/>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      </div>
  )
}

export default OurProjects