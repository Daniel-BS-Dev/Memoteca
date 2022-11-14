import { ThinkingModel } from './../../model/thinking.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thinking',
  templateUrl: './list-thinking.component.html',
  styleUrls: ['./list-thinking.component.scss']
})
export class ListThinkingComponent implements OnInit {

  listaPensamentos! : ThinkingModel[]

  constructor() { }

  ngOnInit(): void {
  }

}
