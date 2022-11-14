import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalExcluirComponent } from '../modals/modal-excluir/modal-excluir.component';
import { AddThinkingComponent } from './components/add-thinking/add-thinking.component';
import { ListThinkingComponent } from './components/list-thinking/list-thinking.component';

const routes: Routes = [
  {
    path: '', component: ListThinkingComponent, children: [
      {
        path: 'add-thinking',
        component: AddThinkingComponent
      },
      {
        path: 'thinking/delete/:id',
        component: ModalExcluirComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThinkingRoutingModule { }
