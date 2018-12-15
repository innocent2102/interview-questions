import { Component, OnInit } from '@angular/core';
import { JsService } from '../../services/js/js.service';
import { Question } from '../../interfaces/question';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';

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
  path = 'js';
  question: Question = {title: '', answer: '', state: 0};
  addWindowHidden = false;

  constructor(private jsService: JsService, private activatedRoute: ActivatedRoute, private router: Router) {  }

  ngOnInit() {
    this.modalOpenTrigger();
    this.getQuestions();
  }

  // refresh() {
  //   this.path = this.activatedRoute.params.value.type;
  //   this.getQuestions();
  // }

  modalOpenTrigger() {
    $(document).ready(function() {
      $('.modal').modal();
    });
  }

  getQuestions() {
    this.jsService.getQuestions(this.path).subscribe((res: Question[]) => {
      this.questions = res;
    });
  }

  pathChange(path: string) {
    this.path = path;
    this.getQuestions();
  }

  setCurrentQuestion(question: Question) {
    this.question = question;
  }

  deleteQuestion() {
    this.jsService.deleteQuestion(this.question, this.path);
    this.resetQuestionValues();
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
    this.jsService.updateQuestion(question, this.path);
    this.editState = false;
  }

  onSubmit() {
    if (this.question.answer !== '' && this.question.title !== '') {
      this.jsService.addQuestion(this.question, this.path);
      this.resetQuestionValues();
    }
  }

  resetQuestionValues() {
    this.question.title = '';
    this.question.answer = '';
  }

  toggleWindow() {
    this.addWindowHidden = !this.addWindowHidden;
  }


}
