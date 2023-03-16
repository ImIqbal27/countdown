import "./App.css";
import useCountDown from "./hook/useCountdown";

function App() {
  const { days, hours, minutes, seconds } = useCountDown("15 March, 2025");

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {days}:{hours}:{minutes}:{seconds}
        </p>
      </header>
      <p>End date: 15 March, 2025</p>
    </div>
  );
}

export default App;
