import { ThinkingService } from 'src/app/thinkings/service/thinking.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThinkingModel } from 'src/app/models/thinking.model';

@Component({
  selector: 'app-modal-view-thinking',
  templateUrl: './modal-view-thinking.component.html',
  styleUrls: ['./modal-view-thinking.component.scss']
})
export class ModalViewThinkingComponent implements OnInit {

  thinking!: ThinkingModel;

  constructor( private router: Router,  private service: ThinkingService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(parseInt(id!)).subscribe((el: ThinkingModel) => {
      this.thinking = el
    })
  }

  canceled() {
    this.router.navigate(['/list-thinking'])
  }

}
