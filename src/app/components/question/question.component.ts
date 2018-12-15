import { Component, OnInit} from '@angular/core';
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
  collectionPath = 'JavaScript';
  addWindowHidden = false;
  answerHidden: boolean;

  constructor(private jsService: QuestionService) {  }

  ngOnInit() {
    this.answerHidden = true;
    this.modalOpenTrigger();
    this.getQuestions();
  }

  toggleAnswer(answer, showOrHideText) {
    answer.hidden = !answer.hidden ;
    //showOrHideText.innerHTML =  answer.hidden ? 'Pokaż odpowiedź' : 'Ukryj odpowiedź';
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
    this.collectionPath = path;
    this.getQuestions();
  }

  setQuestionToDelete(question: Question) {
    this.questionToDelete = question;
  }

  getQuestions() {
    this.jsService.getQuestions(this.collectionPath).subscribe((res: Question[]) => {
      this.questions = res;
    });
  }

  deleteQuestion() {
    this.jsService.deleteQuestion(this.questionToDelete, this.collectionPath);
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
    this.jsService.updateQuestion(question, this.collectionPath);
    this.editState = false;
  }

  addQuestion() {
    if (this.newQuestion.answer !== '' && this.newQuestion.title !== '') {
      this.jsService.addQuestion(this.newQuestion, this.collectionPath);
      this.resetNewQuestionValues();
    }
  }

  toggleWindow() {
    this.addWindowHidden = !this.addWindowHidden;
  }

}
