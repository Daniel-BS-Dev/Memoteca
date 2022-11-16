import { NgModule } from '@angular/core';
import { ListThinkingComponent } from './components/list-thinking/list-thinking.component';
import { AddThinkingComponent } from './components/add-thinking/add-thinking.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListThinkingComponent },
  { path: 'add', component: AddThinkingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThinkingRoutingModule { }
