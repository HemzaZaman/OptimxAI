import React from 'react'
import { images } from 'theme'
import styles from './dashboard.module.scss'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { me } = useSelector((state) => state.app)
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <img src={images.logo} className={styles.logo} alt="logo" />
        <h3 className={styles.greeting}>{`Hi👋, ${me?.fullName || 'User'}`}</h3>
        <h1 className={styles.title}>APIKEY = {me?.apiKey}</h1>
        <h1 className={styles.title}>APIURL = {me?.apiUrl}</h1>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}
Dashboard.defaultProps = {}

export default Dashboard
