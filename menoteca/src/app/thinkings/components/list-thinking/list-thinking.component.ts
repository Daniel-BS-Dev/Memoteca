import { ThinkingModel } from '../../../models/thinking.model';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import * as thinkingSelectors from '../../redux/selector';
import * as thinkingsActions from '../../redux/action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-thinking',
  templateUrl: './list-thinking.component.html',
  styleUrls: ['./list-thinking.component.scss']
})
export class ListThinkingComponent implements OnInit {

  thinkingsList$: Observable<ThinkingModel[]> = this.store$.select(thinkingSelectors.getAllThinkings);

  constructor(private store$: Store, private route: Router) { }

  ngOnInit(): void {
    this.store$.dispatch(thinkingsActions.LoadThinkings());
  }

  addThinking() {
    this.store$.dispatch(thinkingsActions.ClearForm({ payload: false }));
    this.route.navigate(['/list-thinking/add']);
  }

}
