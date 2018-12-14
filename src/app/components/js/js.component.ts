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
  editState = false;
  question: Question;

  constructor(private jsService: JsService) { }

  ngOnInit() {
    this.modalOpenTrigger();
    this.getQuestions();
  }

  modalOpenTrigger() {
    $(document).ready(function() {
      $('.modal').modal();
    });
  }

  getQuestions() {
    this.jsService.getQuestions().subscribe((res: Question[]) => {
      this.questions = res;
    });
  }

  setCurrentQuestion(question: Question) {
    this.question = question;
  }

  deleteQuestion() {
    this.jsService.deleteQuestion(this.question);
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
    this.jsService.updateQuestion(question);
    this.editState = false;
  }

}
