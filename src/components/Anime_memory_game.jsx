import React, { useEffect, useState } from 'react'
import './style.css'
import SingleCardAnime from './SingleCardAnime';


const cardImage = [
    { 'src': 'https://sm.ign.com/ign_il/screenshot/default/goku-super-saiyan-blue_3yz9.jpg', matched: false },
    { 'src': 'https://www.edb.co.il/photos/168012020_still03.full.jpg', matched: false },
    { 'src': 'https://i.ytimg.com/vi/MORpybHP4po/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJV4cHCCHYhuLsdNQ_EqntdE0eKA', matched: false },
    { 'src': 'https://www.ateamas.com/wp-content/uploads/2021/10/%D7%99%D7%92.jpg', matched: false },
    { 'src': 'https://images.alphacoders.com/126/1261782.png', matched: false },
    { 'src': 'https://static1.s123-cdn-static-a.com/uploads/4994219/800_605dc2780bd7a.png', matched: false }
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
    <div className='backGround_body_anime'> 
        <h1 className='App mt-5 pt-5'>Anime Match</h1>
        <button onClick={shuffleCards} className='mt-1'>New Game</button>
        <div className="card-grid">
          {cards.map(card => (
            <SingleCardAnime key={card.id}
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
  )
}
