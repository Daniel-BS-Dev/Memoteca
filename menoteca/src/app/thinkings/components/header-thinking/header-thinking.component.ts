import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ClearForm } from '../../redux/action';
import { filterThinkings } from '../../redux/selector';

@Component({
  selector: 'app-listagem-thinking-header',
  templateUrl: './header-thinking.component.html',
  styleUrls: ['./header-thinking.component.scss']
})
export class HeaderThinkingComponent implements OnInit {

  @Output() filter = new EventEmitter();
  inputFilter = new FormControl('');

  constructor(private store$: Store, private route: Router) { }

  ngOnInit(): void {
    this.filterInput();
  }

  addThinking() {
    this.store$.dispatch(ClearForm({ payload: false }));
    this.route.navigate(['/list-thinking/add']);
  }

  filterInput() {
    this.inputFilter.valueChanges.subscribe((filter: any) => {
      this.filter.emit(filter);
    });
  }

}
