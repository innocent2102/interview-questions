import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Question } from '../../../interfaces/question';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuestionType } from '../../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionCollection: AngularFirestoreCollection<Question>;
  questions: Observable<Question[]>;
  questionsDoc: AngularFirestoreDocument<Question>;
  questionTypeList: QuestionType[] = [
    {id: 0, name: 'HTML'},
    {id: 1, name: 'CSS'},
    {id: 2, name: 'js'},
    {id: 3, name: 'Angular'},
    {id: 3, name: 'TypeScript'}
  ];

  constructor(public afs: AngularFirestore) {  }

  getQuestionTypeList(): Observable<QuestionType[]> {
    return of(this.questionTypeList);
  }

  getQuestions(collectionPath: string): Observable<Question[]> {
    this.questionCollection = this.afs.collection<Question>(collectionPath);
    this.questions = this.questionCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Question;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
    return this.questions;
  }

  addQuestion(question: Question, collectionPath: string) {
    this.questionCollection = this.afs.collection<Question>(collectionPath);
    this.questionCollection.add(question);
  }

  deleteQuestion(question: Question, collectionPath: string) {
    this.questionsDoc = this.afs.doc(`${collectionPath}/${question.id}`);
    this.questionsDoc.delete();
  }

  updateQuestion(question: Question, collectionPath: string) {
    this.questionsDoc = this.afs.doc(`${collectionPath}/${question.id}`);
    this.questionsDoc.update(question);
  }

}
