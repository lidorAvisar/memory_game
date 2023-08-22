import React, { useEffect, useState } from 'react'
import './style.css'
import SingleCardMagic from './SingleCardMagic';


const cardImage = [
  { 'src': '/img/helmet-1.png', matched: false },
  { 'src': '/img/potion-1.png', matched: false },
  { 'src': '/img/ring-1.png', matched: false },
  { 'src': '/img/scroll-1.png', matched: false },
  { 'src': '/img/shield-1.png', matched: false },
  { 'src': '/img/sword-1.png', matched: false }
]

export default function Magic_memory_game() {

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
    <div className='backGround_body_magic'>
      <div >
        <h1 className='App'>Magic Match</h1>
        <button onClick={shuffleCards} className='mt-1'>New Game</button>
        <div className="card-grid">
          {cards.map(card => (
            <SingleCardMagic key={card.id}
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
