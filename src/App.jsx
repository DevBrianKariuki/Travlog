import React from 'react'
import styles from "./styles";
import { Navbar, Hero, Customers, Services, Destinations, TravelPoint } from './Components'

const App = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={` ${styles.paddingY} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Customers />
          <Services />
          <Destinations />
          <TravelPoint />
        </div>
      </div>
    </div>
  )
}

export default App