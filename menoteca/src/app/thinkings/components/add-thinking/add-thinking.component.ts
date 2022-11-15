import { ThinkingModel } from '../../../models/thinking.model';
import { Component, OnInit } from '@angular/core';
import { ThinkingService } from 'src/app/thinkings/service/thinking.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-thinking',
  templateUrl: './add-thinking.component.html',
  styleUrls: ['./add-thinking.component.scss']
})
export class AddThinkingComponent implements OnInit {

  thinking: ThinkingModel = {
    id: 0,
    description: '',
    author: '',
    module: ''
  }

  constructor(private service: ThinkingService, private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let url = this.activeRoute.snapshot.url[0].path;
    if (url === 'edit') {
      const id = this.activeRoute.snapshot.paramMap.get('id');
      this.service.getById(parseInt(id!)).subscribe((el: ThinkingModel) => {
        this.thinking = el
      })
    }
  }

  addThinking() {
    this.service.create(this.thinking).subscribe(() => {
      this.router.navigate(['/list-thinking'])
    })
  }

  canceled() {
    this.router.navigate(['/list-thinking'])
  }

}
