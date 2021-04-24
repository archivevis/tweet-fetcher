import './App.css';
import { Embed } from './components/embed/embed';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Here's your Soyeon tweet~
        </h2>
      </header>

      <div className="App-content">
        <Embed />
      </div>

      <footer className="App-footer">
        <p>
          This app was made with love for Soyeon (and hatred of React) by <a href="https://github.com/reesypiece">Jelly.</a> View the source <a href="https://github.com/reesypiece/tweet-fetcher">here</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;
