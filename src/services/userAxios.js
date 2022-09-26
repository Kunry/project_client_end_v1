import InitAxios from './initAxios';

class UserAxios extends InitAxios {
  constructor() {
    super('/user');
  }

  me(token) {
    return this.axios.get('/me', {
      headers: {
        'authorization' : `Bearer ${token}`
      }
    }).then((response) => response.data);
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new UserAxios();
    }
    console.log(this.instance);
    return this.instance;
  }

}

export default UserAxios.getInstance();
