import React from 'react'
import './singleCard.css'


export default function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card);
        }
    }

    return (
        <div className='cardd'>
            <div className={flipped ? 'flipped' : ''}>
                <img className='front' src={card.src} alt="card front" />
                <img className='back' src="/img/cover.png" onClick={handleClick} alt="card card back" />
            </div>
        </div>
    )
}
