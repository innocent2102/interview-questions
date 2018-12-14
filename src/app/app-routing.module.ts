import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { JsComponent } from './js/js.component';
import { HtmlComponent } from './html/html.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { CssComponent } from './css/css.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'angular', component: AngularComponent},
  {path: 'typescript', component: TypescriptComponent},
  {path: 'js', component: JsComponent},
  {path: 'html', component: HtmlComponent},
  {path: 'css', component: CssComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
