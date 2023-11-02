import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import { useEffect } from 'react'
import styles from './style.module.scss'

const MainLayout = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <>
      <Header />
      <main className={styles.main__container}>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
