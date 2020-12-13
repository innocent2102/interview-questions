import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'question', loadChildren: () => import('./question/question.module').then(m => m.QuestionModule)},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
