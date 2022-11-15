import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThinkingComponent } from './components/thinking/thinking.component';
import { ListThinkingComponent } from './components/list-thinking/list-thinking.component';
import { AddThinkingComponent } from './components/add-thinking/add-thinking.component';
import { ModalRemoveComponent } from '../modals/modal-remove-thinking/modal-remove.component';
import { HomeComponent } from './pages/home/home.component';
import { ThinkingRoutingModule } from './thinking-routing.module';

const declarations = [
  HomeComponent,
  ThinkingComponent,
  ListThinkingComponent,
  AddThinkingComponent,
  ModalRemoveComponent
]

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    CommonModule,
    ThinkingRoutingModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...declarations
  ]
})
export class ThinkingModule { }
