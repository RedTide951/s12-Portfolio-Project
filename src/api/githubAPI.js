import axios from "axios";

const username = "RedTide951";
const repoNames = ["s8-challenge-pizza", "witflix", "RT-Snake"];

// API limit hits while developement. Though it was a good idea to fetch the data from the API, but I decided to hardcode the data for now.
// not using the API

let repos = {};

async function fetchSelectedRepos() {
  try {
    const requests = repoNames.map((repoName) =>
      axios.get(`https://api.github.com/repos/${username}/${repoName}`)
    );

    const responses = await Promise.all(requests);
    repos = responses.map((response) => ({
      name: response.data.name,
      description: response.data.description,
      gitUrl: response.data.html_url,
      homepage: response.data.homepage,
    }));
    console.log(repos);
    return repos;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
}
export default fetchSelectedRepos;
