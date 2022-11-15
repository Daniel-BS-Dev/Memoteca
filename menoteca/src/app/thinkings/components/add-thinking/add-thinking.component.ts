import { ThinkingModel } from 'src/app/models/thinking.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ThinkingService } from 'src/app/thinkings/service/thinking.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as formsValidation from 'src/app/utils/utilitaries-functions';

@Component({
  selector: 'app-add-thinking',
  templateUrl: './add-thinking.component.html',
  styleUrls: ['./add-thinking.component.scss']
})
export class AddThinkingComponent implements OnInit {

  url: any = '';
  thinkingForm!: FormGroup;

  get description() {
    return this.thinkingForm.get('description')!;
  }

  get author() {
    return this.thinkingForm.get('author')!;
  }

  get module() {
    return this.thinkingForm.get('module')!;
  }

  constructor(private service: ThinkingService, private router: Router, private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute, private toast: ToastrService) {
    this.thinkingForm = this.formBuilder.group({
      id: '',
      description: ['', [formsValidation.verificarCampoVazio]],
      author: ['', [formsValidation.verificarCampoVazio]],
      module: ['', [formsValidation.verificarCampoVazio]],
      date: Date.now().toString(),
      update: false
    });
  }

  ngOnInit(): void {
    this.url = this.activeRoute.snapshot.url[0].path;

    if (this.url === 'edit') {
      const id = this.activeRoute.snapshot.paramMap.get('id');

      this.service.getById(parseInt(id!)).subscribe((el: ThinkingModel) => {
        this.thinkingForm.patchValue({
          id: el.id,
          description: el.description,
          author: el.author,
          module: el.module,
          update: true
        });
      })
    }
  }

  chooseModule(value: any) {
    this.thinkingForm.patchValue({
      module: value
    });
  }

  addThinking() {
    if (!this.thinkingForm.valid) {
      return;
    }

    if (this.url === 'edit') {
      this.service.edit(this.thinkingForm.value).subscribe(() => {
        this.toast.success('Pensamento atualizado com sucesso.');
        this.router.navigate(['/list-thinking']);
      });
      return;
    }

    this.service.create(this.thinkingForm.value).subscribe(() => {
      this.toast.success('Pensamento adicionado com sucesso.');
      this.router.navigate(['/list-thinking']);
    })
  }

  canceled() {
    this.router.navigate(['/list-thinking']);
  }

  validFielForm(field: any, form: any) {
    return field.errors?.['campoVazio'] && form.submitted;
  }

}
