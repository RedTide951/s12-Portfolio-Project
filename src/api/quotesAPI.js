import axios from "axios";

const API_KEY = "dAl02c2CQzLOJkgCp8tBHw==yt2eNnuOm8PwnpbX";
const API_URL = "https://api.api-ninjas.com/v1/quotes?category=inspirational";

async function fetchQuote() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "X-Api-Key": API_KEY,
      },
    });

    // Access the quote data
    const quotes = response.data;
    console.log(quotes);
  } catch (error) {
    console.error("Error fetching the quote:", error);
  }
}

fetchQuote();
