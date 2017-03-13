import { Component } from '@angular/core';
import { Quiz, Quizable, QuestionObject } from './quiz';

import DemoQuestions from './demo-questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  quiz: Quiz = Quiz.make({
    id: 'myQuiz',
    questions: DemoQuestions
  })

}
