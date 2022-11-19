import { NgModule } from '@angular/core';
import { ModalViewThinkingComponent } from './modals/modal-view-thinking/modal-view-thinking.component';
import { ListThinkingComponent } from './components/list-thinking/list-thinking.component';
import { ModalRemoveComponent } from './modals/modal-remove-thinking/modal-remove.component';
import { AddThinkingComponent } from './components/add-thinking/add-thinking.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ThinkingComponent } from './components/thinking/thinking.component';
import { ThinkingRoutingModule } from './thinking-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HomeComponent } from './pages/home/home.component';
import { environment } from 'src/environments/environment';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReactiveFormsModule } from '@angular/forms';
import { thinkingReducer } from './redux/reducer';
import { ThinkingEffects } from './redux/effects';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { storeKey } from './redux/selector';
import { StoreModule } from '@ngrx/store';
import { HeaderThinkingComponent } from './components/header-thinking/header-thinking.component';

const declarations = [
  HomeComponent,
  ThinkingComponent,
  ListThinkingComponent,
  AddThinkingComponent,
  ModalRemoveComponent,
  ModalViewThinkingComponent,
  HeaderThinkingComponent
]

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    CommonModule,
    ThinkingRoutingModule,
    MatTooltipModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature(storeKey, thinkingReducer),
    EffectsModule.forFeature([ThinkingEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  exports: [
    ...declarations
  ]
})
export class ThinkingModule { }
