import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import io from 'socket.io-client';
import { Subject } from 'rxjs';
import { Message } from '../../app/message.model';
import { Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  private url = 'http://localhost:4444';
  private socket: Socket | null = null;
  private subjMessages: Subject<Message> = new Subject<Message>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.connect();
    }
  }

  private connect() {
    if (!this.socket) {
      this.socket = io(this.url, {
      });

      this.socket.on('connect', () => {
        console.log('Socket connected');
      });

      this.socket.on('disconnect', () => {
        console.log('Socket disconnected');
      });

      this.socket.on('reconnect', (attemptNumber: number) => {
        console.log(`Reconnected after ${attemptNumber} attempts`);
      });

      this.socket.on('message', (msg: Message) => {
        this.subjMessages.next(msg);
      });
    }
  }

  send(msg: Message) {
    if (this.socket) {
      this.socket.emit('message', msg);
    }
  }

  messages() {
    return this.subjMessages.asObservable();
  }
}
