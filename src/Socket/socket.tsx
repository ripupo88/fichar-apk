import io, {Socket} from 'socket.io-client';

export class Sock {
  private static instance: Socket;
  public socket: Socket;

  constructor() {
    this.socket = io('http://192.168.1.40:3003');
  }

  static getSocket() {
    if (!Sock.instance) {
      Sock.instance = new Sock().socket;
    }
    return Sock.instance;
  }
}
