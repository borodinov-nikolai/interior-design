'use client'
import React, { useState } from 'react'
import styles from './OurProjects.module.scss'
import cs from 'classnames'
import Image from 'next/image'
import { IProject } from '@/entities/project'
import useWindowWidth from '@/shared/hooks/useWindowWidth'



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
  const windowWidth = useWindowWidth()

  
  const hadleChange = (value: number)=> {
    setActiveTab(value)
  }
  const handleMarginTop = (id: number)=> {
  if(windowWidth < 992 && id % 2 === 1) {
    return "-30px"
  } else if(windowWidth > 992 && id % 2 === 1) {
    return "-50px"
  } else {
    return "0px"
  }
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
                tabsList?.map(({id, text})=> (
                  <li onClick={()=> hadleChange(id)} className={cs(styles.navbarItem, id === activeTab && styles.navbarItem__active)}  key={id} >{text}</li>
                ))
               }
          </ul>
        </div>
        <div className={styles.galleryHolder} >
          <ul className={styles.gallery} >
            {
              projects?.slice(0, windowWidth < 768 ? 4 : 8).map(({id, image})=> (
                <li className={styles.galleryItem} style={{marginTop: handleMarginTop(id)}} key={id} >
                  <Image src={image} width={400} height={700} alt='our projects gallery image'/>
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