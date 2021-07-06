import axios, {AxiosRequestConfig} from 'axios';
import {
  getUniqueId,
  getDeviceName,
  getModel,
  getBrand,
} from 'react-native-device-info';

export type Data = {
  username: string;
  password: string;
  role: 'ADMIN' | 'USER';
  code?: string;
};
export type Empresa = {
  alias: string;
  name: string;
  cif: string;
};
export type Usuario = {
  alias: string;
  fullName: string;
  nif: string;
};
export class Api {
  baseUrl = 'http://192.168.230.121:3001'; //192.168.1.42

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

  async Token(token: string) {
    var config: AxiosRequestConfig = {
      method: 'post',
      url: this.baseUrl + '/auth/token',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: {token},
    };
    try {
      return await (await axios(config)).data;
    } catch (error) {
      if (error.response) {
        return this.getError(error.response.data.message);
      }
    }
  }

  async CreaEmpresa(data: Empresa, token: string) {
    console.log(token);
    const mydata = JSON.stringify(data);
    console.log(mydata);
    const config: AxiosRequestConfig = {
      method: 'post',
      url: this.baseUrl + '/empresas',
      headers: {
        Authorization: `Bearer ${token}`,
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
  async GetEmpresa(token: string) {
    const config: AxiosRequestConfig = {
      method: 'get',
      url: this.baseUrl + '/empresas',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
    try {
      return await (await axios(config)).data;
    } catch (error) {
      if (error.response) {
        return this.getError(error.response.data.message);
      }
    }
  }

  async CreaUsuario(data: Usuario, token: string) {
    const mydata = JSON.stringify(data);
    console.log(mydata);
    const config: AxiosRequestConfig = {
      method: 'post',
      url: this.baseUrl + '/auth/activate',
      headers: {
        Authorization: `Bearer ${token}`,
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
