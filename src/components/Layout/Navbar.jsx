import styles from './style.module.scss'
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper__nav}>
        <ul className={styles.wrapper__links}>
          <li>
            <button></button>
          </li>
          <li>
            <button>Favorite</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
