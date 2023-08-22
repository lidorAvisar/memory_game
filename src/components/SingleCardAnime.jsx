import React from 'react'
import './singleCard.css'

export default function SingleCardAnime({ card, handleChoice, flipped, disabled }) {

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  }

  return (
    <div className='cardd'>
      <div className={flipped ? 'flipped' : ''}>
        <img className='front' style={{height:'100%'}} src={card.src} alt="card front" />
        <img className='back' style={{height:'100%'}} src="https://sm.ign.com/t/ign_il/screenshot/default/foreign201611021023000279662586876_cjsh.1280.jpg" onClick={handleClick} alt="card card back" />
      </div>
    </div>
  )
}
