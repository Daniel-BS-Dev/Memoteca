import { ThinkingModel } from '../../../models/thinking.model';
import { Component, OnInit } from '@angular/core';
import { ThinkingService } from 'src/app/thinkings/service/thinking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-thinking',
  templateUrl: './add-thinking.component.html',
  styleUrls: ['./add-thinking.component.scss']
})
export class AddThinkingComponent implements OnInit {

  pensamento: ThinkingModel = {
    id: 0,
    description: '',
    author: '',
    module: ''
  }

  constructor(private service: ThinkingService, private router: Router) { }

  ngOnInit(): void {
  }

  addThinking() {
    this.service.create(this.pensamento).subscribe(() => {
      this.router.navigate(['/list-thinking'])
    })
  }

  canceled() {
    this.router.navigate(['/list-thinking'])
  }

}
