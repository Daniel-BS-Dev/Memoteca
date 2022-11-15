import { ThinkingModel } from '../../../models/thinking.model';
import { Component, OnInit } from '@angular/core';
import { ThinkingService } from 'src/app/thinkings/service/thinking.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-thinking',
  templateUrl: './add-thinking.component.html',
  styleUrls: ['./add-thinking.component.scss']
})
export class AddThinkingComponent implements OnInit {

  url: any = '';
  thinking: ThinkingModel = {
    id: 0,
    description: '',
    author: '',
    module: '',
    date: Date.now().toString()
  }

  constructor(private service: ThinkingService, private router: Router,
    private activeRoute: ActivatedRoute, private toast: ToastrService) { }

  ngOnInit(): void {
    this.url = this.activeRoute.snapshot.url[0].path;

    if (this.url === 'edit') {
      const id = this.activeRoute.snapshot.paramMap.get('id');
      this.service.getById(parseInt(id!)).subscribe((el: ThinkingModel) => {
        this.thinking = el
      })
    }
  }

  addThinking() {
    if (this.url === 'edit') {
      this.service.edit(this.thinking).subscribe(() => {
        this.toast.success('Pensamento atualizado com sucesso.');
        this.router.navigate(['/list-thinking']);
      });
      return;
    }

    this.service.create(this.thinking).subscribe(() => {
      this.toast.success('Pensamento adicionado com sucesso.');
      this.router.navigate(['/list-thinking']);
    })
  }

  canceled() {
    this.router.navigate(['/list-thinking'])
  }

}
