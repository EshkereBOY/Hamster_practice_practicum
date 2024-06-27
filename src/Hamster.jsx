import { useState, useEffect } from 'react'
import './Hamster.css'
import coin from './assets/coin.png'
import btn from './assets/hamster-icon.png'
import logo from './assets/logo.png'

function Hamster() {
  const [count, setCount] = useState(1111)
  const [upgradeCost,setupgradeCost] = useState(100)
  const [clicks,setclicks] = useState(1)

  const UpgradeClick = () =>{
    if (upgradeCost <= count){
      setclicks(clicks+6)
      setupgradeCost(upgradeCost*2)
      setCount(count - upgradeCost)
    }
    else(
      alert('chell....')
    )
  }
 
  return (
    <>
    <div className='main-card div-shadow'>
      <div className='upgrades'>
        <button className='upgrades-text' onClick={UpgradeClick}>
          Upgrade costs
          <div className='upgrades2'>

            <div className='upgrade-image'><img className='coin' src={coin}></img></div>
            {upgradeCost}
          </div>
        </button>
      </div>
      <div className='counter'>
        <div className='counter-img'><img className='coin' src={coin}></img></div>
        <div>{count}</div>
      </div>
      <div>
        <button onClick={() => setCount(count+clicks)}>
          <img className='btn-hmst' src={btn}></img>
        </button>
      </div>
      <div className='Author'><p>Made by EshkereBoy</p> <img className='logo' src={logo}></img></div>
    </div>
    </> 
  )
}

export default Hamster
