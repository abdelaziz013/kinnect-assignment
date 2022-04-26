import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private max = 8;
  private min = 1;

  constructor() {}

  public generateRandomNumber() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    
  }
}
