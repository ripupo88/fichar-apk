import axios, {AxiosRequestConfig} from 'axios';

export class Api {
  async login(username: string, password: string) {
    var data = JSON.stringify({
      username,
      password,
    });

    var config: AxiosRequestConfig = {
      method: 'post',
      url: 'http://10.0.2.2:3001/auth/singin',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    return await (await axios(config)).data;
  }
}
