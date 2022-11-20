import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { ClearForm } from '../../redux/action';

@Component({
  selector: 'app-listagem-thinking-header',
  templateUrl: './header-thinking.component.html',
  styleUrls: ['./header-thinking.component.scss']
})
export class HeaderThinkingComponent implements OnInit {

  @Output() filter = new EventEmitter();
  inputFilter = new FormControl('');
  describe$ = new Subject();

  constructor(private store$: Store, private route: Router) { }

  ngOnInit(): void {
    this.filterInput();
  }

  addThinking() {
    this.store$.dispatch(ClearForm({ payload: false }));
    this.route.navigate(['/list-thinking/add']);
  }

  filterInput() {
    this.inputFilter.valueChanges.pipe(takeUntil(this.describe$)).subscribe((filter: any) => {
      this.filter.emit(filter);
    });
  }

  ngOnDestroy(): void {
    this.describe$.next(this.describe$);
    this.describe$.complete();
  }

}
