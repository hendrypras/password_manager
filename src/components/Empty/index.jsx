import React from 'react'
import emptyIcon from '../../assets/images/empty.svg'
import styles from './style.module.scss'
const Empty = ({ text }) => {
  return (
    <div className={styles.empty__wrapper}>
      <img src={emptyIcon} alt="empty-icon" />
      <p>{text}</p>
    </div>
  )
}

export default Empty
