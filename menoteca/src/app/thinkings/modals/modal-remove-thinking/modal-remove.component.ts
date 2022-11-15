import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ThinkingModel } from 'src/app/models/thinking.model';
import { DeleteThinking } from '../../redux/action';

@Component({
  selector: 'app-modal-remove',
  templateUrl: './modal-remove.component.html',
  styleUrls: ['./modal-remove.component.scss']
})
export class ModalRemoveComponent implements OnInit {

  thinking!: ThinkingModel;

  constructor(
    public dialogRef: MatDialogRef<ModalRemoveComponent>,
    private store$: Store
  ) { }

  ngOnInit(): void { }

  deleteThinking() {
    this.store$.dispatch(DeleteThinking({ payload: this.thinking }));

    this.dialogRef.close();
  }

}
