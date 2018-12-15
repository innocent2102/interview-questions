import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question/question.service';
import { Question } from '../../interfaces/question';

declare var $: any;
@Component({
  selector: 'app-js',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  questions: Question[];
  questionToEdit: Question;
  questionToDelete: Question;
  newQuestion: Question = {title: '', answer: '', state: 0};
  editState = false;
  colletionPath = 'js';
  addWindowHidden = false;

  constructor(private jsService: QuestionService) {  }

  ngOnInit() {
    this.modalOpenTrigger();
    this.getQuestions();
  }

  resetNewQuestionValues() {
    this.newQuestion.title = '';
    this.newQuestion.answer = '';
    this.newQuestion.state = 0;
  }

  modalOpenTrigger() {
    $(document).ready(function() {
      $('.modal').modal();
    });
  }

  pathChange(path: string) {
    this.colletionPath = path;
    this.getQuestions();
  }

  setQuestionToDelete(question: Question) {
    this.questionToDelete = question;
  }

  getQuestions() {
    this.jsService.getQuestions(this.colletionPath).subscribe((res: Question[]) => {
      this.questions = res;
    });
  }

  deleteQuestion() {
    this.jsService.deleteQuestion(this.questionToDelete, this.colletionPath);
    this.resetNewQuestionValues();
  }

  editQuestion(event, question) {
    this.editState = true;
    this.questionToEdit = question;
    question.state = 1;
  }

  cancelEdit(question: Question) {
    question.state = 0;
    this.editState = false;
    this.getQuestions();
  }

  updateQuestion(question: Question) {
    question.state = 0;
    this.jsService.updateQuestion(question, this.colletionPath);
    this.editState = false;
  }

  addQuestion() {
    if (this.newQuestion.answer !== '' && this.newQuestion.title !== '') {
      this.jsService.addQuestion(this.newQuestion, this.colletionPath);
      this.resetNewQuestionValues();
    }
  }

  toggleWindow() {
    this.addWindowHidden = !this.addWindowHidden;
  }

}
