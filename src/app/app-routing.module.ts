import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './components/angular/angular.component';
import { JsComponent } from './components/js/js.component';
import { HtmlComponent } from './components/html/html.component';
import { TypescriptComponent } from './components/typescript/typescript.component';
import { CssComponent } from './components/css/css.component';
import { HomeComponent } from './components/home/home.component';
import {JsCreateComponent} from './components/js/js-create/js-create.component';

const routes: Routes = [
  // {path: 'angular', component: JsComponent},
  // {path: 'typescript', component: JsComponent},
  // {path: 'js', component: JsComponent},
  {path: 'question', component: JsComponent},
  // {path: 'html', component: JsComponent},
  // {path: 'css', component: JsComponent},
  {path: 'home', component: JsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
