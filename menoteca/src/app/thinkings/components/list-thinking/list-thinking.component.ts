import { ThinkingModel } from '../../../models/thinking.model';
import { Component, OnInit } from '@angular/core';
import { ThinkingService } from 'src/app/thinkings/service/thinking.service';

@Component({
  selector: 'app-list-thinking',
  templateUrl: './list-thinking.component.html',
  styleUrls: ['./list-thinking.component.scss']
})
export class ListThinkingComponent implements OnInit {

  listThinking! : ThinkingModel[]

  constructor(private service: ThinkingService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe((el: ThinkingModel[]) => {
      this.listThinking = el.reverse();
    })
  }

}
