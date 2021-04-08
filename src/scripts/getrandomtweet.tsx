import { NeedleResponse } from "needle";

export async function getRandomTweet(searchResults: NeedleResponse["body"]): Promise<string> {
  searchResults = await searchResults;
  console.log(searchResults)
  if (!searchResults.errors && searchResults.data) {
    const resultNumber = searchResults.data.length;
  
    // gets a random index from the tweets body list
    const tweetIndex = Math.floor(Math.random() * resultNumber);
    // then gets the tweet ID
    const tweetID = searchResults.data[tweetIndex].id;
    
    console.log(tweetID);
    return tweetID;
  } else {
    if (searchResults.errors) {
      throw new Error(`${searchResults.title}: ${searchResults.errors.message}`);
    } else {
      throw new Error("you couldn't even connect to twitter. holy shit");
    }
  }
}