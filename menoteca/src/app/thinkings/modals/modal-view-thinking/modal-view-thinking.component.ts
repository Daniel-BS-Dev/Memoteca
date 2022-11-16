import { Component, OnInit } from '@angular/core';
import * as fromThinkingSelectors from 'src/app/thinkings/redux/selector';
import { ThinkingModel } from 'src/app/models/thinking.model';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal-view-thinking',
  templateUrl: './modal-view-thinking.component.html',
  styleUrls: ['./modal-view-thinking.component.scss']
})
export class ModalViewThinkingComponent implements OnInit {

  thinking$: Observable<ThinkingModel | null> = this.store$.select(fromThinkingSelectors.getThinking);
  loading$: Observable<boolean> = this.store$.select(fromThinkingSelectors.loadingThinking);

  constructor(private store$: Store,
    public dialogRef: MatDialogRef<ModalViewThinkingComponent>) { }

  ngOnInit(): void { }

  canceled = () =>
    this.dialogRef.close();

}
