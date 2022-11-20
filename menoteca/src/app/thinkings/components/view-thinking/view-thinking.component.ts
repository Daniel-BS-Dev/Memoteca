import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ThinkingModel } from 'src/app/models/thinking.model';
import { getThinking, loadingThinking } from '../../redux/selector';

@Component({
  selector: 'app-view-thinking',
  templateUrl: './view-thinking.component.html',
  styleUrls: ['./view-thinking.component.scss']
})
export class ViewThinkingComponent implements OnInit {

  thinking$: Observable<ThinkingModel | null> = this.store$.select(getThinking);
  loading$: Observable<boolean> = this.store$.select(loadingThinking);

  constructor(private store$: Store, private location: Location) { }

  ngOnInit(): void { }

  back() {
   this.location.back();
  }

}
