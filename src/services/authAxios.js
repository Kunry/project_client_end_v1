import InitAxios from './initAxios';

class AuthAxios extends InitAxios {
  constructor() {
    super('/auth');
  }

  registro(body) {
    return this.axios.post('/registro', body).then((response) => response.data);
  }

  login(body) {
    return this.axios.post('/login', body).then((response) => response.data);
  }


  static getInstance() {
    if (!this.instance) {
      this.instance = new AuthAxios();
    }
    console.log(this.instance);
    return this.instance;
  }

}

export default AuthAxios.getInstance();
