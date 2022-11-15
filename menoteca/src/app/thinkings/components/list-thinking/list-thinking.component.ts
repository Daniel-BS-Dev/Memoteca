import { ThinkingModel } from '../../../models/thinking.model';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import * as thinkingSelectors from '../../redux/selector';
import * as thinkingsActions from '../../redux/action';

@Component({
  selector: 'app-list-thinking',
  templateUrl: './list-thinking.component.html',
  styleUrls: ['./list-thinking.component.scss']
})
export class ListThinkingComponent implements OnInit {

  thinkingsList$: Observable<ThinkingModel[]> = this.store.select(thinkingSelectors.getAllThikings);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(thinkingsActions.LoadThinkings());
  }

}
