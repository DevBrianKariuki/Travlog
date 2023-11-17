import React from 'react'
import styles from "./styles";
import { Navbar, Hero } from './Components'

const App = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default App