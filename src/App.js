import "./App.css";
import useCountDown from "./hook/useCountdown";

function App() {
  const { days, hours, minutes, seconds } = useCountDown("15 March, 2024");

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {days}:{hours}:{minutes}:{seconds}
        </p>
      </header>
    </div>
  );
}

export default App;
