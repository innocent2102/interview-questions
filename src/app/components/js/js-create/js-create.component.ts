import { Component, OnInit } from '@angular/core';
import { JsService } from '../../../services/js/js.service';
import  { Question } from '../../../interfaces/question';

@Component({
  selector: 'app-js-create',
  templateUrl: './js-create.component.html',
  styleUrls: ['./js-create.component.scss']
})
export class JsCreateComponent implements OnInit {

  questions: Question[];
  question: Question = {
    title: '',
    answer: ''
  };

  constructor(private jsService: JsService) { }

  ngOnInit() {
  }

}
