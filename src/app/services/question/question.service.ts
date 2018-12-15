import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Question } from '../../interfaces/question';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionCollection: AngularFirestoreCollection<Question>;
  questions: Observable<Question[]>;
  questionsDoc: AngularFirestoreDocument<Question>;

  constructor(public afs: AngularFirestore) {  }

  getQuestions(collectionPath: string) {
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
