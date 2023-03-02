import axios from "axios";

export async function fetchQuote() {
  try {
    const res = await axios.get(`https://api.quotable.io/random`);
    const data = res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}
