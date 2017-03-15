import { Component, OnInit } from '@angular/core';

import { Quiz, Quizable, QuestionObject, QuizService } from './quiz';

import DemoQuestions from './demo-questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuizService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  quiz: Quiz;

  constructor(
    private quizService: QuizService
  ) {  }

  ngOnInit() {
    this.quizService.makeQuiz({
      id: 'myQuiz',
      questions: DemoQuestions
    }).getQuiz('myQuiz');

    console.log("CurrentQuiz: ", this.quizService.currentQuiz);
  }


}
