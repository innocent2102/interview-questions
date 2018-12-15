import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Question } from '../../interfaces/question';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JsService {

  questionCollection: AngularFirestoreCollection<Question>;
  questions: Observable<Question[]>;
  questionsDoc: AngularFirestoreDocument<Question>;

  constructor(public afs: AngularFirestore) {
    //this.questionCollection = this.afs.collection<Question>(path);
  }

  getQuestions(path: string) {
    this.questionCollection = this.afs.collection<Question>(path);
    this.questions = this.questionCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Question;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
    return this.questions;
  }

  addQuestion(question: Question, path: string) {
    this.questionCollection = this.afs.collection<Question>(path);
    this.questionCollection.add(question);
  }

  deleteQuestion(question: Question, path: string) {
    this.questionsDoc = this.afs.doc(`${path}/${question.id}`);
    this.questionsDoc.delete();
  }

  updateQuestion(question: Question, path: string) {
    this.questionsDoc = this.afs.doc(`${path}/${question.id}`);
    this.questionsDoc.update(question);
  }

}
