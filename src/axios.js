import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000/v1/";
axios.defaults.headers.common['content-type'] = "application/json";
axios.defaults.headers.common['Accept'] = "application/json";
axios.defaults.headers.common['Authorization'] = "Bearer "+ localStorage.getItem("token");