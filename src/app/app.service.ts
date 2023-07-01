import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  generateRandomId() {
    return (Math.random() + 1).toString(36).substring(7)
  }
}
