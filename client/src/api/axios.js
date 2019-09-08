import axios from 'axios';
const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? "https://www.eventgrab.com" : 'http://localhost:5000' ,
  timeout: 15000, 
  headers: {}

});

export default instance;