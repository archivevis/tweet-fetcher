import needle from "needle";
import { NeedleResponse } from "needle";
import env from "react-dotenv";

const queries = ["from:g_i_dle #소연 has:images", "from:soyeonsarchive has:images", "from:hourlysoyeon has:images"];

const endpoint = "https://katskit.com/reesies/twitter-proxy.php";
const token = env.BEARER_TOKEN;

function getQueryIndex(q: string[]): number {
  const randomNumber = Math.random();
  let index : number;

  // 1/5 chance it gets from @G_I_DLE since soyeon never posts
  // 2/5 chance it gets from @soyeonsarchive
  // 2/5 chance it gets from @hourlysoyeon
  if (randomNumber < 0.2) {
    index = 0;
  } else if (randomNumber < 0.4) {
    index = 1;
  } else {
    index = 2;
  }

  return index;
}

// getting a list of results
export async function getResults(): Promise<NeedleResponse["body"]> {
  const queryString = queries[getQueryIndex(queries)];

  const params : {[key:string]: string} = {
    query: `${queryString}`,
    "tweet.fields": "attachments,created_at",
    expansions: "author_id",
    "media.fields": "",
  };

  let url = "tweets/search/recent?";
  console.log(params)
  for (let key in params){
    console.log(params[key])
    url += encodeURIComponent(key) + "="+encodeURIComponent(params[key])+"&";
    console.log(url);
  }
  // remove & at the end
  url = url.substr(0, url.length - 1)
  // send as param to kat's little thingy uwu
  let newParams = {url : url};
  const results = await needle("get", endpoint, newParams, {
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