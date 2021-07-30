import axios, {AxiosRequestConfig} from 'axios';

export type Data = {
  username: string;
  password: string;
  role: 'ADMIN' | 'USER';
  code?: string;
  notifToken: string;
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
  username: string;
};
export class Api {
  baseUrl = 'http://192.168.1.42:3001'; //192.168.1.42 //192.168.230.121

  async login(username: string, password: string, notifToken: string) {
    var data = JSON.stringify({
      username,
      password,
      notifToken,
    });

    var config: AxiosRequestConfig = {
      method: 'post',
      url: this.baseUrl + '/auth/singin',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
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
    const mydata = JSON.stringify(data);

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

  async Fichar(token: string, trabajando: boolean, code: number) {
    const myUrl = trabajando
      ? `/registros/salida/${code}`
      : `/registros/entrada/${code}`;

    const config: AxiosRequestConfig = {
      method: 'get',
      url: this.baseUrl + myUrl,
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
