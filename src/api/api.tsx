import axios, {AxiosRequestConfig} from 'axios';

export type Data = {
  username: string;
  password: string;
  role: 'ADMIN' | 'USER';
  code: string;
};
export type Empresa = {
  alias: string;
  name: string;
  cif: string;
};
export class Api {
  baseUrl = 'http://192.168.230.121:3001';

  async login(username: string, password: string) {
    var data = JSON.stringify({
      username,
      password,
    });

    var config: AxiosRequestConfig = {
      method: 'post',
      url: this.baseUrl + '/auth/singin',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    try {
      return await (await axios(config)).data;
    } catch (error) {
      if (error.response) {
        return this.getError(error.response.data.message);
      }
    }
  }
  getError = (error: string | string[]): string => {
    if (typeof error === 'string') {
      return error;
    } else {
      return error[0];
    }
  };
  async Registro(data: Data) {
    var mydata = JSON.stringify(data);
    var config: AxiosRequestConfig = {
      method: 'post',
      url: this.baseUrl + '/auth/singup',
      headers: {
        'Content-Type': 'application/json',
      },
      data: mydata,
    };
    try {
      return await (await axios(config)).data;
    } catch (error) {
      if (error.response) {
        return this.getError(error.response.data.message);
      }
    }
  }

  async CreaEmpresa(data: Empresa) {
    const mydata = JSON.stringify(data);
    console.log(mydata);
    const config: AxiosRequestConfig = {
      method: 'post',
      url: this.baseUrl + '/empresas',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlN1cmV5YSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYyNDU4NTg3NCwiZXhwIjoxNjI3MTc3ODc0fQ.C-TiT6DeuH1xhloBzX3NPhcXe5AxYopcp58uyow4yX4',
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
