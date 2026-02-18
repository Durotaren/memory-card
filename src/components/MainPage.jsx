import { useState, useEffect } from 'react';
import '../styles/MainPage.css';

export default function MainPage() {
  const [final, setFinal] = useState('');
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,47,242,331')
      .then((result) => result.json())
      .then((result) => {
        setFinal(result);
        console.log(result);
      });
  }, []);

  function handleClick(e) {
    setClickedCards([...clickedCards, Number(e.target.parentElement.id)]);
    console.log(clickedCards);
  }

  return (
    <ul onClick={handleClick}>
      {final &&
        final.map((item) => (
          <li key={item.id} id={item.id}>
            <img width={200} height={200} src={item.image} />
          </li>
        ))}
    </ul>
  );
}
