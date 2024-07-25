import { useState, useEffect } from 'react'
import './Hamster.css'
import coin from './assets/coin.png'
import btn from './assets/hamster-icon.png'
import logo from './assets/logo.png'
import energyImg from './assets/energy.png'

function Hamster() {

  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  const [upgradeCost, setupgradeCost] = useState(() => {
    const savedUpgradeCost = localStorage.getItem('upgradeCost');
    return savedUpgradeCost ? parseInt(savedUpgradeCost, 10) : 100;
  });

  const [clicks, setclicks] = useState(() => {
    const savedClicks = localStorage.getItem('clicks');
    return savedClicks ? parseInt(savedClicks, 10) : 1;
  });

  const [energy, setEnergy] = useState(() => {
    const savedEnergy = localStorage.getItem('energy');
    return savedEnergy ? parseInt(savedEnergy, 10) : 100;
  });

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  useEffect(() => {
    localStorage.setItem('upgradeCost', upgradeCost);
  }, [upgradeCost]);

  useEffect(() => {
    localStorage.setItem('clicks', clicks);
  }, [clicks]);

  useEffect(() => {
    localStorage.setItem('energy', energy);
  }, [energy]);

  

  const UpgradeClick = () =>{
    if (upgradeCost <= count){
      setclicks(clicks+6)
      setupgradeCost(upgradeCost*2)
      setCount(count - upgradeCost)
    }
    else(
      alert('Babok net')
    )
  }

  const resetProgress = () => {
    setCount(0);
    setupgradeCost(100);
    setclicks(1);
    localStorage.removeItem('count');
    localStorage.removeItem('upgradeCost');
    localStorage.removeItem('clicks');
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (energy < 100) {
        setEnergy(energy + 1);
      }
    }, 500); // Восстанавливаем 1 единицу энергии каждую секунду

    return () => clearInterval(interval);
  }, [energy]);

  const EnergyClick = () => {
    if (energy > 0) {
      setCount(count + clicks);
      setEnergy(energy - 1);
    } else {
      alert('No energy left');
    }
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
        <div><img className='coin' src={energyImg}></img></div>
        <div>{energy}</div>
      </div>
      <div>
          <button onClick={EnergyClick} disabled={energy <= 0}>
            <img className='btn-hmst' src={btn} alt="hamster" />
          </button>
      </div>
      <div className='Author'><p>Made by EshkereBoy</p> <img className='logo' src={logo}></img></div>
      <div>
          <button className='reset-button' onClick={resetProgress}>
            Reset Progress
          </button>
        </div>
    </div>
    </> 
  )
}

export default Hamster
