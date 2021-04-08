import React from 'react';
import { Tweet } from 'react-twitter-widgets';
import { getResults } from '../../scripts/getresults';
import { getRandomTweet } from '../../scripts/getrandomtweet';

type EmbedState = {
  id: string;
}

export class Embed extends React.Component<{}, EmbedState> {
  state: EmbedState = {
    id: "",
  };

  async componentDidMount() {
    try {
      const results = getResults();
      const tweetID = await getRandomTweet(results);
      
      this.setState({id: tweetID})
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Tweet tweetId={`${this.state.id}`} options={{ width: "500" }}/>
    );
  }

}