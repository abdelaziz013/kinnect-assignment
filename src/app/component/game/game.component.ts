import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GameService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  firstNumber: number = 0;
  secondNumber: number = 0;
  startGame = false;
  correctAnswer = false;
  wrongAnswer = false;
  startTime: number = 0;
  timePerAnswer: number = 0;
  answerForm: FormGroup = new FormGroup({
    answer: new FormControl('', Validators.required)
  });

  constructor(private gameService: GameService) {}

  ngOnInit(): void {}

  // clear correct notification as user type new answer
  touch() {
    if (this.correctAnswer) this.correctAnswer = false;
  }

  // generate random numbers
  generateNumbers() {
    this.startGame = true;
    this.startTime = Date.now();
   
    this.firstNumber = this.gameService.generateRandomNumber();
    this.secondNumber = this.gameService.generateRandomNumber();
  }

  // answer
  submitAnswer() {
    const sum = this.firstNumber + this.secondNumber;
    const answer = parseInt(this.answerForm.controls['answer'].value);
    if (answer === sum) {
      this.correctAnswer = true;
      this.wrongAnswer = false;
      this.timePerAnswer = Number(((Date.now() - this.startTime) / 1000).toFixed(1));
      this.generateNumbers();
      this.answerForm.reset();
    } else {
      this.wrongAnswer = true;
      this.correctAnswer = false;
    }
  }
}
