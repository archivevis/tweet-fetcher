import { NeedleResponse } from "needle";

export function getRandomTweet(searchResults: NeedleResponse["body"]): string {
  if (!searchResults.errors && searchResults.data) {
    const resultNumber = searchResults.data.length;
  
    // gets a random index from the tweets body list
    const tweetIndex = Math.floor(Math.random() * resultNumber);
    // then gets the tweet ID to be used with react-tweet-embed
    const tweetID = searchResults.data[tweetIndex].id;

    return tweetID;
  } else {
    if (searchResults.errors) {
      throw new Error(`${searchResults.title}: ${searchResults.errors.message}`);
    } else {
      throw new Error("you couldn't even connect to twitter. holy shit");
    }
  }
}
