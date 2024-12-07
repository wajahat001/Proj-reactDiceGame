import React from 'react'
import styles from './landing.module.css'
import { useNavigate } from 'react-router-dom'



const LandingPage = () => {

  const navigate = useNavigate()
  const gotoMainPage = () =>{
    navigate("/main")
  }


  return <div className={styles.mainContainer} >
  <div>
      <img src="../../mainDices.png" alt="" />
  </div>
  <div>
    <h1>DICE GAME</h1>
    <button onClick={gotoMainPage}  type="button">Start Game</button>
  </div>

</div>
    
   
}

export default LandingPage