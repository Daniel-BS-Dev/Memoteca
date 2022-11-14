import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddThinkingComponent } from './components/add-thinking/add-thinking.component';
import { ListThinkingComponent } from './components/list-thinking/list-thinking.component';
import { ModalExcluirComponent } from './modals/modal-excluir/modal-excluir.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'thinkings'
    },
    {
        path: 'thinkings',
        component: ListThinkingComponent
    },
    {
        path: 'add-thinking',
        component: AddThinkingComponent
    },
    {
      path: 'thinking/delete/:id',
      component: ModalExcluirComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
