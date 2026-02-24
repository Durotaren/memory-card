import { useState, useEffect } from 'react';
import '../styles/MainPage.css';

export default function MainPage() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [final, setFinal] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [lost, changeLost] = useState(false);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,47,242,331')
      .then((result) => result.json())
      .then((result) => {
        setFinal(result.sort(() => Math.random() - 0.5));
      });
  }, []);

  function handleClick(e) {
    const id = Number(e.target.id);
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
    }
  }

  return (
    <div className="main-container">
      {lost && (
        <div className="lost-div">
          <div className="inner-lost">
            <p>You lost!</p>
            <p>Your current Best score is: {bestScore}</p>
            <button
              className="start-over-btn"
              onClick={() => {
                changeLost(false);
              }}
            >
              Click here to start over.
            </button>
          </div>
        </div>
      )}
      <div className="para-container">
        <p className="score-para">{`Current Score: ${score}`}</p>
        <p className="score-para">{`Best Score: ${bestScore}`}</p>
        <button className="show-instructions-btn">Show Instructions</button>
      </div>
      <ul className="cards-container" onClick={handleClick}>
        {final.length > 0 &&
          final.map((item) => (
            <li className="card" key={item.id} id={item.id}>
              <img width={300} id={item.id} height={300} src={item.image} />
            </li>
          ))}
      </ul>
    </div>
  );
}
