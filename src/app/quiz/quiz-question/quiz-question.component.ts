import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Question, AnswerSet, Answer, Quiz } from '../models';

import { QuestionService } from '../services/question.service';
import { AnswerService, ScoreObj } from '../services/answer.service'

@Component({
  moduleId: module.id,
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css'],
  providers: [QuestionService]
})
export class QuizQuestionComponent implements OnInit {
  @Input() active: boolean;
  @Output() onFinished = new EventEmitter<ScoreObj>()

  private currentAIdx = -1;

  constructor(
    private questionService: QuestionService,
    private answerService: AnswerService
  ) { }

  ngOnInit() {
    if (this.active) {
      this.questionService.startQuiz();
    }
  }

  get currentQuestion(): Question {
    return this.questionService.currentQuestion;
  }

  get currentQuiz(): Quiz {
    return this.questionService.currentQuiz;
  }

  get questionText() {
    return this.currentQuestion.question;
  }

  get hasNext(): boolean {
    return this.questionService.hasNext;
  }

  onAnswerChoice(aIdx: number) {
    this.currentAIdx = aIdx;
  }

  addAnswer() {
    this.answerService.add(this.currentAIdx, this.currentQuestion);
    this.currentAIdx = -1;
  }

  proceed() {
    if (this.hasNext) {
      this.getNextQuestion();
    }
    else { this.submit(); }
  }

  getNextQuestion() {
    if (this.currentAIdx >= 0) {
      this.addAnswer();
      this.questionService.getNext();
    }
  }

  submit() {
    this.addAnswer();
    const scoreObj = this.answerService.getScore(this.currentQuiz);
    this.onFinished.emit(scoreObj);
  }





}
