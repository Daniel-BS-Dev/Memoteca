import { Component, OnInit } from '@angular/core';
import { ThinkingModel } from '../../../models/thinking.model';
import * as thinkingSelectors from '../../redux/selector';
import * as thinkingsActions from '../../redux/action';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { first, Observable } from 'rxjs';

@Component({
  selector: 'app-list-thinking',
  templateUrl: './list-thinking.component.html',
  styleUrls: ['./list-thinking.component.scss']
})
export class ListThinkingComponent implements OnInit {

  currentPage: number = 3;
  maxPage: boolean = false;
  minPage: boolean = true;
  filterInput: boolean = false;

  totalThinkingList$: Observable<ThinkingModel[]> = this.store$.select(thinkingSelectors.getAllThinkings);
  thinkingsList$: Observable<ThinkingModel[]> = this.store$.select(thinkingSelectors.pageThinkings, { total: this.currentPage });
  loading$: Observable<boolean> = this.store$.select(thinkingSelectors.loadingThinking);

  constructor(private store$: Store) { }

  ngOnInit(): void {
    this.store$.dispatch(thinkingsActions.Loading({ payload: false }));
    this.store$.dispatch(thinkingsActions.LoadThinkings());
    this.filterInput = false;
  }

  filter = (campo: any) => {
    if(!campo) {
      this.thinkingsList$ = this.store$.select(thinkingSelectors.pageThinkings, { total: this.currentPage });
      return;
    }

    this.thinkingsList$ = this.store$.select(thinkingSelectors.filterThinkings, { name: campo.trim() });
    this.filterInput = true;
  }

  loadingMore() {
    this.totalThinkingList$.pipe(first()).subscribe(el => {
      if (el.length < this.currentPage) {
        this.maxPage = true;
        return;
      }

      this.minPage = false;
      this.thinkingsList$ = this.store$.select(thinkingSelectors.pageThinkings, { total: this.currentPage += 3 });
    })
  }

  loadingLess() {
    if (this.currentPage == 3) {
      this.minPage = true;
      return;
    }

    this.maxPage = false;
    this.thinkingsList$ = this.store$.select(thinkingSelectors.pageThinkings, { total: this.currentPage -= 3 });
  }

}
