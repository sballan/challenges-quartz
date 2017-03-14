import { Component, OnInit, Input } from '@angular/core';

import { QuizService } from '../quiz.service';
import { Quiz } from '../models';

@Component({
  moduleId: module.id,
  selector: 'app-quiz-panel',
  templateUrl: './quiz-panel.component.html',
  styleUrls: ['./quiz-panel.component.css'],
  providers: [QuizService]
})
export class QuizPanelComponent implements OnInit {
  @Input()
  quiz: Quiz;

  @Input()
  setCurrent = false;

  private currentQuestionIdx = 0;
  private currentAnswerIdx: number;
  private quizLength;

  public onAnswerChoice(aIdx: number) {
    this.currentAnswerIdx = aIdx;
  }

  public get buttonText() {
    return this.hasNextQuestion ? "Next Question" : "Finish Quiz";
  }

  public get currentQuestion() {
    return this.quiz.questions[this.currentQuestionIdx];
  }

  public get hasNextQuestion() : boolean {
    return this.currentQuestionIdx < this.quiz.length - 1;
  }

  public get hasPrevQuestion() : boolean {
    return this.currentQuestionIdx > 0;
  }

  public getNextQuestion() {
    if (this.hasNextQuestion) {

      this.quizService.addAnswer(
        this.quiz,
        this.currentQuestionIdx,
        this.currentAnswerIdx
      );

      this.currentQuestionIdx++;
    } else {
      throw Error('There is no next question');
    }
  }

  constructor(private quizService: QuizService) {  }

  ngOnInit() {
    if (this.setCurrent && this.quiz) {
      this.quizService.setCurrentQuiz(this.quiz);
    }
  }

}
