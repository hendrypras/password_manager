import React from 'react'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper__brand}>
        <Link to={'/'}>
          <h1>Manager Password</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header
