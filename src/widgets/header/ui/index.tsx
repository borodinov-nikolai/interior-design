import React from 'react'
import styles from './Header.module.scss'
import cs from 'classnames'
import Link from 'next/link'
import BurgerIcon from '@/shared/svg/burger'
import Button from '@/shared/ui/button'

export const Header = () => {
  return (
    <header className={styles.root} >
      <div className={cs(styles.inner, 'container')} >
        <Link href={'/'} className={styles.logo} >RMC</Link>
        <nav className={styles.navigation} >
          <ul className={styles.navList}>
            <li><Link href='#'>THE STUDIO</Link></li>
            <li><Link href='#'>PROJECTS</Link></li>
            <li><Link href='#'>ARCHITECTURE</Link></li>
            <li><Link href='#'>BLOG</Link></li>
          </ul>
        </nav>
        <div className={styles.contacts} ><Button>CONTACT</Button></div>
        <div className={styles.burger} ><BurgerIcon/></div>
      </div>
    </header>
  )
}
