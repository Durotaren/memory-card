import '../styles/IntroductionModal.css';

export default function IntroductionModal({ firstTime, setFirstTime }) {
  return (
    <div className="modal-container">
      <div className="inner-modal">
        <h1>Welcome to the Rick and Morty Lab! Let's play a game!</h1>
        <div className="list-button-container">
          <ul className="instructions-container">
            <li>
              Click a card <strong>only once</strong>.
            </li>
            <li>
              After each click, cards <strong>shuffle</strong>.
            </li>
            <li>Don’t click the same card twice.</li>
            <li>
              Each new card = <strong>+1 point</strong>.
            </li>
            <li>
              Repeat a card → <strong>game resets</strong>.
            </li>
          </ul>
          <button
            className="agree-btn"
            onClick={() => {
              setFirstTime(!firstTime);
            }}
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}
