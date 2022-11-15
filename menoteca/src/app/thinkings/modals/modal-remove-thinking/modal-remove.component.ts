import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ThinkingModel } from 'src/app/models/thinking.model';
import { ThinkingService } from 'src/app/thinkings/service/thinking.service';

@Component({
  selector: 'app-modal-remove',
  templateUrl: './modal-remove.component.html',
  styleUrls: ['./modal-remove.component.scss']
})
export class ModalRemoveComponent implements OnInit {

thinking!: ThinkingModel

  constructor(
    private service: ThinkingService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    // this.service.getById(parseInt(id!)).subscribe((el: ThinkingModel) => {
    //   this.thinking = el
    // })
  }

  deleteThinking() {
    if(this.thinking.id) {
      this.service.delete(this.thinking.id).subscribe(() => {
        this.router.navigate(['/list-thinking'])
        this.toast.success('Pensamento removido com sucesso.')
      })
    }
  }

  canceled() {
    this.router.navigate(['/list-thinking'])
  }


}
