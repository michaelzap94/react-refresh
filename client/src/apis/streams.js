import axios from 'axios';
//the url to your jsonServer
export default axios.create({
  baseURL: 'http://localhost:3001'
});