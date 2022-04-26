import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private max = 9;
  private min = 0;

  constructor() {}

  public generateRandomNumber() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
}
