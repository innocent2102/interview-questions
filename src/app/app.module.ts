import {environment} from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JsComponent } from './components/js/js.component';
import { AngularComponent } from './components/angular/angular.component';
import { HtmlComponent } from './components/html/html.component';
import { TypescriptComponent } from './components/typescript/typescript.component';
import { CssComponent } from './components/css/css.component';
import { JsDetailComponent } from './components/js/js-detail/js-detail.component';
import { JsCreateComponent } from './components/js/js-create/js-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JsComponent,
    AngularComponent,
    HtmlComponent,
    TypescriptComponent,
    CssComponent,
    JsDetailComponent,
    JsCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
