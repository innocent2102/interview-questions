import { Component, OnInit } from '@angular/core';
import { Question } from '../../../../interfaces/question';
import { QuestionService } from '../../../services/question/question.service';
import { QuestionType, QuestionTypeName } from '../../../models/question';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  addWindowHidden = false;
  answerHidden: boolean;
  collectionPath = 'JavaScript';
  editState = false;
  newQuestion: Question = {title: '', answer: '', state: 0};
  questionToDelete: Question;
  questionToEdit: Question;
  questions: Question[];
  questionTypeList: QuestionType[];

  constructor(private jsService: QuestionService ) { }

  ngOnInit(): void {
    this.getQuestionTypeList();
  }

  getQuestions() {
    this.jsService.getQuestions(this.collectionPath).subscribe((res: Question[]) => {
      this.questions = res;
    });
  }

  getQuestionTypeList() {
    this.jsService.getQuestionTypeList().subscribe((res: QuestionType[]) => {
      this.questionTypeList = res;
    });
  }

  pathChange(path: QuestionTypeName) {
    this.collectionPath = path;
    this.getQuestions();
  }

}
