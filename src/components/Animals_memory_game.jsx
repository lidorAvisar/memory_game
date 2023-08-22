import React, { useEffect, useState } from 'react'
import './style.css'
import SingleCardAnimals from './SingleCardAnimals';


const cardImage = [
    { 'src': 'https://images4.alphacoders.com/268/26824.jpg', matched: false },
    { 'src': 'https://images6.alphacoders.com/678/678636.jpg', matched: false },
    { 'src': 'https://images3.alphacoders.com/104/104655.jpg', matched: false },
    { 'src': 'https://images7.alphacoders.com/500/500507.jpg', matched: false },
    { 'src': 'https://images5.alphacoders.com/444/444384.jpg', matched: false },
    { 'src': 'https://images6.alphacoders.com/331/331073.jpg', matched: false }
  ]

export default function Animals_megic_game() {

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [res, setRes] = useState();
  
  
    //results
    const finalRes = (val) => {
      setRes(turns)
    }
  
  
    //shuffle cards
    const shuffleCards = () => {
      const shuffledCards = [...cardImage, ...cardImage].sort(() =>
        Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }));
  
      finalRes(turns);
      setChoiceOne(null);
      setChoiceTwo(null);
      setCards(shuffledCards);
      setTurns(0);
    }
  
    //handle a choice
    const handleChoice = (card) => {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }
  
  
    //start a new game automagically
    useEffect(() => {
      shuffleCards();
    }, [])
  
  
  
    //compare 2 selected cards
    useEffect(() => {
  
      if (choiceOne && choiceTwo) {
        setDisabled(true)
        if (choiceOne.src === choiceTwo.src) {
          setCards(prevCards => {
            return prevCards.map(card => {
              if (card.src === choiceOne.src) {
                return { ...card, matched: true }
              } else {
                return card;
              }
            })
          })
          resetTurn();
        } else {
          setTimeout(() => {
            resetTurn();
          }, 800);
        }
      }
    }, [choiceOne, choiceTwo])
    console.log(cards);
  
  
  
    //reset choice & increase turn
    const resetTurn = () => {
      setChoiceOne(null);
      setChoiceTwo(null);
      setTurns(prevTurns => prevTurns + 1);
      setDisabled(false)
    }


  return (
    <div className='backGround_body_animals'>
         <div >
        <h1 className='App'>Animals Match</h1>
        <button onClick={shuffleCards} className='mt-1'>New Game</button>
        <div className="card-grid">
          {cards.map(card => (
            <SingleCardAnimals key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled} />
          ))}
        </div>
        <h4 className='mt-3'>Turns: {turns}</h4>
        <div>
          <div>your number of rounds in the previous game is: {res}</div>
        </div>
      </div>
    </div>
  )
}
