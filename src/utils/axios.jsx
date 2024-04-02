import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTRiNGYxZmY5NDNlM2Q0ZGY3OTMyYmI3Zjc1NTA4NyIsInN1YiI6IjY2MDdiMDA5YTZkZGNiMDE0OTQ0YWEzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CM6lU-zNrkd2l7bUY0uhQkAbkEp4zee6ijYBuqdI7FU",
    accept: "application/json",
  },
});

export default instance;
