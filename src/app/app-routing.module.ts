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
  {path: 'angular', component: AngularComponent},
  {path: 'typescript', component: TypescriptComponent},
  {path: 'js', component: JsComponent},
  {path: 'html', component: HtmlComponent},
  {path: 'css', component: CssComponent},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: JsCreateComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
