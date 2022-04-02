import axios from "axios";

// process.env.NODE_ENV
// 'development' quando rodamos 'npm start'
// 'production' quando rodamos 'npm run build'
// 'test' quando rodamos 'npm test'

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://ironhack-book-app-api.herokuapp.com";

const api = axios.create({ baseURL: url });

export default api;
