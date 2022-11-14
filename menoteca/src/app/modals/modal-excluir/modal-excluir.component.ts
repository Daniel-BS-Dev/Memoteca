import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThinkingModel } from 'src/app/model/thinking.model';
import { ThinkingService } from 'src/app/service/thinking.service';

@Component({
  selector: 'app-modal-excluir',
  templateUrl: './modal-excluir.component.html',
  styleUrls: ['./modal-excluir.component.scss']
})
export class ModalExcluirComponent implements OnInit {

  pensamento!: ThinkingModel

  constructor(
    private service: ThinkingService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(parseInt(id!)).subscribe((el: ThinkingModel) => {
      this.pensamento = el
    })
  }

  excluirPensamento() {
    if(this.pensamento.id) {
      this.service.delete(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }


}
