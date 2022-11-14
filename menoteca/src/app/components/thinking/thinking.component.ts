import { ThinkingModel } from './../../model/thinking.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thinking',
  templateUrl: './thinking.component.html',
  styleUrls: ['./thinking.component.scss']
})
export class ThinkingComponent implements OnInit {

  @Input() pensamento! : ThinkingModel

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.description.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
