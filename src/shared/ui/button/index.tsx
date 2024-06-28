import React, { FC, ReactNode } from 'react'
import styles from './Button.module.scss'


interface IProps  {
    children: ReactNode
}

const Button: FC<IProps> = ({children}) => {
  return (
    <button className={styles.root} >{children}</button>
  )
}

export default Button