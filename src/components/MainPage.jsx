import { useState, useEffect } from 'react';
import '../styles/MainPage.css';

export default function MainPage() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [final, setFinal] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,47,242,331')
      .then((result) => result.json())
      .then((result) => {
        console.log(result);

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
    } else {
      setClickedCards([...clickedCards, id]);
      setFinal([...final].sort(() => Math.random() - 0.5));
      setScore(score + 1);
    }
  }

  return (
    <div className="main-container">
      <div className="para-container">
        <p className="score-para">{`Current Score: ${score}`}</p>
        <p className="score-para">{`Best Score: ${bestScore}`}</p>
      </div>
      <ul onClick={handleClick}>
        {final.length > 0 &&
          final.map((item) => (
            <li key={item.id} id={item.id}>
              <img width={300} id={item.id} height={300} src={item.image} />
            </li>
          ))}
      </ul>
    </div>
  );
}
