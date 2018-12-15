import { Component, OnInit } from '@angular/core';
import { JsService } from '../../services/js/js.service';
import { Question } from '../../interfaces/question';

declare var $: any;
@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.scss']
})
export class JsComponent implements OnInit {

  questions: Question[];
  questionToEdit: Question;
  questionToDelete: Question;
  newQuestion: Question = {title: '', answer: '', state: 0};
  editState = false;
  colletionOath = 'js';
  addWindowHidden = false;

  constructor(private jsService: JsService) {  }

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
    this.colletionOath = path;
    this.getQuestions();
  }

  setQuestionToDelete(question: Question) {
    this.questionToDelete = question;
  }

  getQuestions() {
    this.jsService.getQuestions(this.colletionOath).subscribe((res: Question[]) => {
      this.questions = res;
    });
  }

  deleteQuestion() {
    this.jsService.deleteQuestion(this.questionToDelete, this.colletionOath);
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
    this.jsService.updateQuestion(question, this.colletionOath);
    this.editState = false;
  }

  addQuestion() {
    if (this.newQuestion.answer !== '' && this.newQuestion.title !== '') {
      this.jsService.addQuestion(this.newQuestion, this.colletionOath);
      this.resetNewQuestionValues();
    }
  }

  toggleWindow() {
    this.addWindowHidden = !this.addWindowHidden;
  }

}
