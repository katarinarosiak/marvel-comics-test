import axios from "axios";
import MD5 from "crypto-js/md5";

const logError = (errorResponse) => {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }
}

const baseURL = process.env.REACT_APP_BASE_URL;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const timestamp = new Date().getTime();
const hash = MD5(`${timestamp}${privateKey}${publicKey}`).toString();


const apiClient =  {
	fetchCharacter: async (name) => {
		const endpoint = `/v1/public/characters?name=${name}&`;
		const URL = `${baseURL}${endpoint}apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;
		try { 
			const { data } = await axios.get(URL);
			const character = data.data.results[0];
			return character;
		} catch (e) {
			logError(e);
		}
	},
	fetchStories: async (id) => {
		const endpoint = `/v1/public/characters/${id}/stories?`;
		const URL = `${baseURL}${endpoint}apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;
		try {
			const { data } = await axios.get(URL);
			const stories = data.data.results;
			return stories;
		} catch (e) {
			logError(e);
		}
	},
}

export default apiClient;