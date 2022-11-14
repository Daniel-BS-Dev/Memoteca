import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThinkingComponent } from './components/thinking/thinking.component';
import { ListThinkingComponent } from './components/list-thinking/list-thinking.component';
import { AddThinkingComponent } from './components/add-thinking/add-thinking.component';
import { ModalExcluirComponent } from '../modals/modal-excluir/modal-excluir.component';
import { HomeComponent } from './pages/home/home.component';
import { ThinkingRoutingModule } from './thinking-routing.module';

const declarations = [
  HomeComponent,
  ThinkingComponent,
  ListThinkingComponent,
  AddThinkingComponent,
  ModalExcluirComponent
]

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    CommonModule,
    ThinkingRoutingModule,
    FormsModule
  ],
  exports: [
    ...declarations
  ]
})
export class ThinkingModule { }
