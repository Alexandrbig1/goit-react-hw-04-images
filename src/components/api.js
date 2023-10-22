import axios from "axios";

// axios.defaults.baseURL = "https://pixabay.com/api/";
const URL = "https://pixabay.com/api/";
const KEY = "39155276-6bb78cfc3029a8ff9cc1c0e7d";

export async function getApi(search, page, perPage) {
  const url = `${URL}?key=${KEY}&q=${search}&page=${page}&per_page=${perPage}`;
  const response = await axios.get(url);

  return response.data;
}
