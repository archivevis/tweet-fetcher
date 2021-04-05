import needle from "needle";
import { NeedleResponse } from "needle";
import env from "react-dotenv";

const queries = ["from:g_i_dle #소연 has:images", "from:soyeonsarchive has:images"];

const endpoint = "https://api.twitter.com/2/tweets/search/recent";
const token = env.BEARER_TOKEN;

function getQueryIndex(q: string[]): number {
  const randomNumber = Math.random();
  let index : number;

  if (randomNumber > 0.25) {
    index = 0;
  } else {
    index = 1;
  }

  return index;
}

// getting a list of results
// Promise <unknown> is actually the type of thing the body of a needle request is
export async function getResults(): Promise<NeedleResponse["body"]> {
  const queryString = queries[getQueryIndex(queries)];

  const params = {
    query: `${queryString}`,
    "tweet.fields": "attachments,created_at",
    expansions: "author_id",
    "media.fields": "",
  };

  const results = await needle("get", endpoint, params, {
    headers: {
      "User-Agent": "v2RecentSearchJS",
      authorization: `Bearer ${token}`,
    },
  });

  if (results.body) {
    return results.body;
  } else {
    throw new Error("Request unsuccessful.");
  }
}
