import React from 'react';
import './App.css';
import TweetEmbed from 'react-tweet-embed';
import { getResults } from './scripts/getresults';
import { getRandomTweet } from './scripts/getrandomtweet';

const results = getResults();
const tweetID = getRandomTweet(results);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Insert Title Here
        </h2>
      </header>
      <div className="App-content">
        <div className="TweetEmbed">
        <TweetEmbed id={`${tweetID}`} placeholder={'Getting Tweet...'} />
        </div>
      </div>
    </div>
  );
}

export default App;
