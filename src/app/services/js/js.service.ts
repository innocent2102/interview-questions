import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Question } from '../../interfaces/question';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JsService {

  private questionCollection: AngularFirestoreCollection<Question>;
  questions: Observable<Question[]>;

  constructor(public afs: AngularFirestore) { }

  getQuestions() {
    this.questionCollection = this.afs.collection<Question>('js');
    this.questions = this.questionCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Question;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
    return this.questions;
  }

}
