import axios from 'axios';

export class Api {
  myAccios = axios.create({baseURL: 'http://localhost:3001'});

  login(username: string, password: string) {
    this.myAccios.post('auth/singin', {username, password}).then((res) => {
      return res;
    });
  }
}
