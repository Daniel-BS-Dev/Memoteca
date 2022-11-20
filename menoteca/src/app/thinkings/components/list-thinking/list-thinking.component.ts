import { Component, OnInit } from '@angular/core';
import { ThinkingModel } from '../../../models/thinking.model';
import * as thinkingSelectors from '../../redux/selector';
import * as thinkingsActions from '../../redux/action';
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
  allFavoriteThinking: boolean = false;

  totalThinkingList$: Observable<ThinkingModel[]> = this.store$.select(thinkingSelectors.getAllThinkings);
  thinkingsList$: Observable<ThinkingModel[]> = this.store$.select(thinkingSelectors.pageThinkings, { total: this.currentPage });
  loading$: Observable<boolean> = this.store$.select(thinkingSelectors.loadingThinking);

  constructor(private store$: Store) { }

   async ngOnInit() {
    this.store$.dispatch(thinkingsActions.Loading({ payload: false }));
    this.store$.dispatch(thinkingsActions.LoadThinkings());
    this.filterInput = false;
  }

  filter = (campo: any) => {
    if (!campo && !this.allFavoriteThinking) {
      this.thinkingsList$ = this.store$.select(thinkingSelectors.pageThinkings, { total: this.currentPage });
      return;
    }

    if (!campo && this.allFavoriteThinking) {
      this.thinkingsList$ = this.store$.select(thinkingSelectors.getAllFavoriteThinkings);
      return;
    }

    if (this.allFavoriteThinking) {
      this.thinkingsList$ = this.store$.select(thinkingSelectors.filterFavoriteThinkings, { name: campo });
      this.filterInput = true;
      return;
    }

    this.thinkingsList$ = this.store$.select(thinkingSelectors.filterThinkings, { name: campo });
    this.filterInput = true;
  }

  allThikingFavorite(value: any) {
    if (!value) return;

    this.allFavoriteThinking = value;
    this.thinkingsList$ = this.store$.select(thinkingSelectors.getAllFavoriteThinkings);
  }

  allThinking(value: any) {
    if (!value) return;

    this.allFavoriteThinking = !value;
    this.thinkingsList$ = this.store$.select(thinkingSelectors.pageThinkings, { total: this.currentPage });
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
