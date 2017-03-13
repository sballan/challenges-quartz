import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../models';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit {
  @Input()
  question: Question;

  constructor() { }

  public get questionText() {
    return this.question.question;
  }

  public get answersText() {
    return this.question.answers;
  }


  ngOnInit() {
  }

}
