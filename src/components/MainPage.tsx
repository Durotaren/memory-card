import { useState, useEffect } from 'react';
import '../styles/MainPage.css';
import { ModalProps, Character } from '../types';

export default function MainPage({ firstTime, setFirstTime }: ModalProps) {
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [final, setFinal] = useState<Character[]>([]);
  const [clickedCards, setClickedCards] = useState<number[]>([]);
  const [lost, changeLost] = useState<boolean>(false);
  const [won, changeWon] = useState<boolean>(false);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,47,242,331')
      .then((result) => result.json())
      .then((result) => {
        setFinal(result.sort(() => Math.random() - 0.5));
        console.log(result);
      });
  }, []);

  function handleClick(e: React.MouseEvent<HTMLUListElement>) {
    const target = e.target as HTMLElement;
    const id = Number(target.id);
    if (clickedCards.includes(id)) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setClickedCards([]);
      changeLost(true);
    } else {
      setClickedCards([...clickedCards, id]);
      setFinal([...final].sort(() => Math.random() - 0.5));
      setScore(score + 1);
      if (score + 1 === 8) {
        setBestScore(8);
        changeWon(true);
      }
    }
  }

  return (
    <div className="main-container">
      {won && (
        <div className="won-div">
          <div className="inner-won">
            <p className="won-game">Genius level achieved. Respect.</p>
            <p>Your current Best score is: {bestScore}</p>
            <button
              className="start-over-btn"
              onClick={() => {
                changeWon(false);
                setScore(0);
                setClickedCards([]);
              }}
            >
              Run It Again.
            </button>
          </div>
        </div>
      )}
      {lost && (
        <div className="lost-div">
          <div className="inner-lost">
            <p className="lost-game">You messed it up, Morty! Try again!</p>
            <p>Your current Best score is: {bestScore}</p>
            <button
              className="start-over-btn"
              onClick={() => {
                changeLost(false);
              }}
            >
              Reset Timeline.
            </button>
          </div>
        </div>
      )}
      <div className="para-container">
        <p className="score-para">{`Current Score: ${score}`}</p>
        <p className="score-para">{`Best Score: ${bestScore}`}</p>
        <button
          onClick={() => {
            setFirstTime(true);
          }}
          className="show-instructions-btn"
        >
          Show Instructions
        </button>
      </div>
      <ul className="cards-container" onClick={handleClick}>
        {final.length > 0 &&
          final.map((item) => (
            <li className="card" key={item.id} id={String(item.id)}>
              <img
                width={300}
                id={String(item.id)}
                height={300}
                src={item.image}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
