import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateGuard } from './activate.guard';
import { ErrorComponent } from './error/error.component';
import { PracticeComponent } from './practice/practice.component';

import { SigninComponent } from './signin/signin.component';

import { TaskgetComponent } from './taskget/taskget.component';


const routes: Routes = [
  {path: '', component:SigninComponent},
  {path: 'practice', component: PracticeComponent, canActivate: [ActivateGuard] }, 
  {path: 'taskget', component:TaskgetComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
