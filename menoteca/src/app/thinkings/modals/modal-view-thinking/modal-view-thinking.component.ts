import { Store } from '@ngrx/store';
import { ThinkingService } from 'src/app/thinkings/service/thinking.service';
import { Component, OnInit } from '@angular/core';
import { ThinkingModel } from 'src/app/models/thinking.model';
import { Observable } from 'rxjs';
import * as fromThinkingSelectors from 'src/app/thinkings/redux/selector';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-view-thinking',
  templateUrl: './modal-view-thinking.component.html',
  styleUrls: ['./modal-view-thinking.component.scss']
})
export class ModalViewThinkingComponent implements OnInit {

  thinking$: Observable<ThinkingModel | null> = this.store$.select(fromThinkingSelectors.getThinking);

  constructor( private store$: Store,
    public dialogRef: MatDialogRef<ModalViewThinkingComponent>) { }

  ngOnInit(): void { }

  canceled = () =>
    this.dialogRef.close();

}
