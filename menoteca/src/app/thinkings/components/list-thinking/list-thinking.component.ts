import { Component, OnInit } from '@angular/core';
import { ThinkingModel } from '../../../models/thinking.model';
import * as thinkingSelectors from '../../redux/selector';
import * as thinkingsActions from '../../redux/action';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-thinking',
  templateUrl: './list-thinking.component.html',
  styleUrls: ['./list-thinking.component.scss']
})
export class ListThinkingComponent implements OnInit {

  pageAtual: number = 1;

  thinkingsList$: Observable<ThinkingModel[]> = this.store$.select(thinkingSelectors.getAllThinkings);
  loading$: Observable<boolean> = this.store$.select(thinkingSelectors.loadingThinking);

  constructor(private store$: Store, private route: Router) { }

  ngOnInit(): void {
    this.store$.dispatch(thinkingsActions.Loading({payload: false}));
    this.store$.dispatch(thinkingsActions.LoadThinkings({ payload: this.pageAtual }));
  }

  addThinking() {
    this.store$.dispatch(thinkingsActions.ClearForm({ payload: false }));
    this.route.navigate(['/list-thinking/add']);
  }

}
