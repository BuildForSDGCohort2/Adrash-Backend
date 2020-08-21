import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';


// The currently open WebSocket connections have to be kept in some kind of state.
// In order to make it easier for ourselves to retrieve and manage the sockets,
// we are going to implement our own socket state.

// the state are saved by using userId as a key

@Injectable()
export class SocketStateService {
  private socketState = new Map<string, Socket[]>();

  public remove(userId: string, socket: Socket): boolean {
    const existingSockets = this.socketState.get(userId);

    if (!existingSockets) {
      return true;
    }

    const sockets = existingSockets.filter(s => s.id !== socket.id);

    if (!sockets.length) {
      this.socketState.delete(userId);
    } else {
      this.socketState.set(userId, sockets);
    }

    return true;
  }

  public add(userId: string, socket: Socket): boolean {
    const existingSockets = this.socketState.get(userId) || [];

    const sockets = [...existingSockets, socket];

    this.socketState.set(userId, sockets);

    return true;
  }

  public get(userId: string): Socket[] {
    return this.socketState.get(userId) || [];
  }

  public getAll(): Socket[] {
    const all = [];

    this.socketState.forEach(sockets => all.push(sockets));

    return all;
  }
}
