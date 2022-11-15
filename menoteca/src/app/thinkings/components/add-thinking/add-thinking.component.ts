
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as formsValidation from 'src/app/utils/utilitaries-functions';
import * as fromThinkingActions from '../../redux/action';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { ThinkingModel } from 'src/app/models/thinking.model';
import * as fromThinkingSelectors from '../../redux/selector';

@Component({
  selector: 'app-add-thinking',
  templateUrl: './add-thinking.component.html',
  styleUrls: ['./add-thinking.component.scss']
})
export class AddThinkingComponent implements OnInit {

  thinking$: Observable<ThinkingModel | null> = this.store$.select(fromThinkingSelectors.getThinking);
  edit$: Observable<boolean> = this.store$.select(fromThinkingSelectors.editThinking);

  edit: boolean = false;
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

  constructor(private store$: Store, private location: Location,
    private formBuilder: FormBuilder) {
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
    this.edit$.subscribe(el => {
      this.edit = el
    });

    if (this.edit) {
      this.thinking$.subscribe((el: any) => {
        this.thinkingForm.patchValue({
          id: el.id,
          description: el.description,
          author: el.author,
          module: el.module,
          update: true
        });

        this.edit = true;
      });
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

    if (this.edit) {
      this.store$.dispatch(fromThinkingActions.UpdateThinking({ payload: this.thinkingForm.value }));
      
      this.canceled();
      return;
    }

    this.store$.dispatch(fromThinkingActions.CreateThinking({ payload: this.thinkingForm.value }));
    this.canceled();
  }

  validFielForm(field: any, form: any) {
    return field.errors?.['campoVazio'] && form.submitted;
  }

  canceled = () =>
    this.location.back();

}
