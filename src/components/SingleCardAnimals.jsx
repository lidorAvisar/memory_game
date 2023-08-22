import React from 'react'
import './singleCard.css'

export default function SingleCardAnimals({ card, handleChoice, flipped, disabled }) {

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  }

  return (
    <div className='cardd'>
      <div className={flipped ? 'flipped' : ''}>
        <img className='front' style={{height:'100%'}} src={card.src} alt="card front" />
        <img className='back' style={{height:'100%'}} src="https://images8.alphacoders.com/396/396467.jpg" onClick={handleClick} alt="card card back" />
      </div>
    </div>
  )
}
