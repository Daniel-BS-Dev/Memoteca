import { ThinkingModel } from '../../../models/thinking.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thinking',
  templateUrl: './thinking.component.html',
  styleUrls: ['./thinking.component.scss']
})
export class ThinkingComponent implements OnInit {

  @Input() thinking!: ThinkingModel

  constructor() { }

  ngOnInit(): void {
  }

  get thinkingDescription() {
    let lengthDescription = this.thinking.description;
    const LIMIT = 75;

    if (lengthDescription.length > LIMIT) {
      return lengthDescription.substring(0, LIMIT).trimEnd() + '...';
    }

    return lengthDescription;
  }

}
