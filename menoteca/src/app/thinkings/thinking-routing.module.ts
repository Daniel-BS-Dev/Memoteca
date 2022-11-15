import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalRemoveComponent } from './modals/modal-remove-thinking/modal-remove.component';
import { AddThinkingComponent } from './components/add-thinking/add-thinking.component';
import { ListThinkingComponent } from './components/list-thinking/list-thinking.component';

const routes: Routes = [
  { path: '', component: ListThinkingComponent },
  { path: 'add', component: AddThinkingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThinkingRoutingModule { }
