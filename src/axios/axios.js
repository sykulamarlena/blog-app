import Axios from 'axios';

const BASE_API_ENTRYPOINT = 'https://jsonplaceholder.typicode.com';
const axios = Axios.create({baseURL: BASE_API_ENTRYPOINT});

export default axios;