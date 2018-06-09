import { Injectable } from '@angular/core';
import { Time } from '@angular/common';
import { timer, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  subscription: Subscription;

  constructor() { 
  }

  add(message: string) {
    this.messages.push(message);
    let index = this.messages.length - 1;
    const source = timer(3000);
    this.subscription = source.subscribe(val => {
      this.clear();
    });
  }

  clear() {
    this.messages = [];
  }
}
