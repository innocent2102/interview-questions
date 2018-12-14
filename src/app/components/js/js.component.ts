import { Component, OnInit } from '@angular/core';
import { JsService } from '../../services/js/js.service';
import { Question } from '../../interfaces/question';

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.scss']
})
export class JsComponent implements OnInit {

  questions: Question[];

  constructor(private jsService: JsService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.jsService.getQuestions().subscribe((res: Question[]) => {
      this.questions = res;
      console.log(res);
    });
  }

}
