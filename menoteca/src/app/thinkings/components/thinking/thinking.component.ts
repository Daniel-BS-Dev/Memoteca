import { Component, Input, OnInit } from '@angular/core';
import { ModalRemoveComponent } from '../../modals/modal-remove-thinking/modal-remove.component';
import { ThinkingModel } from '../../../models/thinking.model';
import * as fromThinkingAction from '../../redux/action';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ModalViewThinkingComponent } from '../../modals/modal-view-thinking/modal-view-thinking.component';

@Component({
  selector: 'app-thinking',
  templateUrl: './thinking.component.html',
  styleUrls: ['./thinking.component.scss']
})
export class ThinkingComponent implements OnInit {

  @Input() thinking!: ThinkingModel;

  constructor(private store$: Store, private dialog: MatDialog,
    private route: Router) { }

  ngOnInit(): void { }

  get thinkingDescription() {
    let lengthDescription = this.thinking.description;
    const LIMIT = 70;

    if (lengthDescription.length > LIMIT) {
      return lengthDescription.substring(0, LIMIT).trimEnd() + '...';
    }

    return lengthDescription;
  }

  seeThinking(thinking: ThinkingModel) {
    this.store$.dispatch(fromThinkingAction.LoadThinkingSuccess({ payload: thinking }));

    this.dialog.open(ModalViewThinkingComponent);
  }

  editThinking(thinking: ThinkingModel) {
    this.store$.dispatch(fromThinkingAction.LoadThinkingSuccess({ payload: thinking }));
    this.store$.dispatch(fromThinkingAction.ClearForm({ payload: true }));

    this.route.navigate(['/list-thinking/add']);
  }

  deleteThinking(thinking: ThinkingModel) {
    const modal = this.dialog.open(ModalRemoveComponent, { width: '320px' });

    modal.componentInstance.thinking = thinking;
  }

  toFavorite = (thinking: ThinkingModel) =>
    this.store$.dispatch(fromThinkingAction.FavoriteThinking({ payload: { ...thinking, favorite: true } }));

  toDesfavorite = (thinking: ThinkingModel) =>
    this.store$.dispatch(fromThinkingAction.FavoriteThinking({ payload: { ...thinking, favorite: false } }));

}
