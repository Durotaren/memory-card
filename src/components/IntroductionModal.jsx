import '../styles/IntroductionModal.css';

export default function IntroductionModal() {
  return (
    <div className="modal-container">
      <div className="inner-modal">
        <h1>Welcome to the Rick and Morty Lab! Let's play a game!</h1>
        <ul className="instructions-container">
          <li>
            Click a card <b>only once</b>.
          </li>
          <li>
            After each click, cards <b>shuffle</b>.
          </li>
          <li>Don’t click the same card twice.</li>
          <li>
            Each new card = <b>+1 point</b>.
          </li>
          <li>
            Repeat a card → <b>game resets</b>.
          </li>
        </ul>
        <button className="got-it-btn">Got it!</button>
      </div>
    </div>
  );
}
