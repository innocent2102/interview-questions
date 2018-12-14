import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Question } from '../../interfaces/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsService {

  questionCollection: AngularFirestoreCollection<Question>;
  questions: Observable<Question[]>;

  constructor(public afs: AngularFirestore) {
    this.questions = this.afs.collection('js').valueChanges();
  }

  getQuestions() {
    return this.questions;
  }

}
