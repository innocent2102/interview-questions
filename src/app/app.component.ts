import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'interview-questions';

  js: any[];


  constructor(db: AngularFireDatabase) {
    db.list('/js')
      .valueChanges()
      .subscribe(item => {
        console.log(item);
      });

  }



}
