import axios, {AxiosRequestConfig} from 'axios';

export type Data = {
  username: string;
  password: string;
  role: 'ADMIN' | 'USER';
  code: string;
};
export class Api {
  async login(username: string, password: string) {
    var data = JSON.stringify({
      username,
      password,
    });

    var config: AxiosRequestConfig = {
      method: 'post',
      url: 'http://192.168.1.42:3001/auth/singin',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    return await (await axios(config)).data;
  }

  async Registro(data: Data) {
    var mydata = JSON.stringify(data);
    console.log(data);
    var config: AxiosRequestConfig = {
      method: 'post',
      url: 'http://192.168.1.42:3001/auth/singup',
      headers: {
        'Content-Type': 'application/json',
      },
      data: mydata,
    };
    try {
      return await axios(config);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    }
  }
}
