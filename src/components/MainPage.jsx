import { useState, useEffect } from 'react';
import '../styles/MainPage.css';

export default function MainPage() {
  const API =
    'https://api.giphy.com/v1/gifs/translate?api_key=qfo7Y0r4yYWleaOhwWI4J1F74Azisus8&s=rick';
  const [final, setFinal] = useState('');
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,47,242,331')
      .then((result) => result.json())
      .then((result) => {
        setFinal(result);
        console.log(result);
      });
  }, []);

  return (
    <ul>
      {final &&
        final.map((item) => (
          <li key={item.id}>
            <img width={200} height={200} src={item.image} />
          </li>
        ))}
    </ul>
  );
}
