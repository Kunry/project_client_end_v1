import axios from 'axios';

class InitAxios {
  constructor(path) {
    this.axios = axios.create({
      baseURL: `http://localhost:5005/api${path}`
    })
  }
}

export default InitAxios;