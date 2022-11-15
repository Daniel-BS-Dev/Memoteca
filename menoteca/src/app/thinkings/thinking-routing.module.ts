import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalExcluirComponent } from '../modals/modal-excluir/modal-excluir.component';
import { ModalViewThinkingComponent } from '../modals/modal-view-thinking/modal-view-thinking.component';
import { AddThinkingComponent } from './components/add-thinking/add-thinking.component';
import { ListThinkingComponent } from './components/list-thinking/list-thinking.component';

const routes: Routes = [
  { path: '', component: ListThinkingComponent },
  { path: 'add', component: AddThinkingComponent },
  { path: 'delete/:id', component: ModalExcluirComponent },
  { path: 'edit/:id', component: AddThinkingComponent },
  { path: 'view/:id', component: ModalViewThinkingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThinkingRoutingModule { }
