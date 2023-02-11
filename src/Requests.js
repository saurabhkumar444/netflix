const API_KEY = "f81980ff410e46f422d64ddf3a56dddd";

const request = {
  fetchTrending: `./trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopReted: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMoives: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMoives: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMoives: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMoives: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default request;
