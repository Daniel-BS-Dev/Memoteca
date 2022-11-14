import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListThinkingComponent } from './components/list-thinking/list-thinking.component';
import { ThinkingComponent } from './components/thinking/thinking.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list-thinking'
    },
    {
        path: 'list-thinking',
        component: ListThinkingComponent
    },
    {
        path: 'add-thinking',
        component: ThinkingComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
