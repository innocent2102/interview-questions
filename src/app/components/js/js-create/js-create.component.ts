import { Component, OnInit } from '@angular/core';
import { JsService } from '../../../services/js/js.service';
import  { Question } from '../../../interfaces/question';

@Component({
  selector: 'app-js-create',
  templateUrl: './js-create.component.html',
  styleUrls: ['./js-create.component.scss']
})
export class JsCreateComponent implements OnInit {

  question: Question = {title: '', answer: '', state: 0};
  addWindowHidden = false;
  path = 'angular';

  constructor(private jsService: JsService) { }

  ngOnInit() {
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


