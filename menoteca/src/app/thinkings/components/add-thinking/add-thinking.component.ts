
import { Component, OnInit } from '@angular/core';
import * as formsValidation from 'src/app/utils/utilitaries-functions';
import { ThinkingModel } from 'src/app/models/thinking.model';
import * as fromThinkingSelectors from '../../redux/selector';
import * as fromThinkingActions from '../../redux/action';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { first, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-thinking',
  templateUrl: './add-thinking.component.html',
  styleUrls: ['./add-thinking.component.scss']
})
export class AddThinkingComponent implements OnInit {

  thinking$: Observable<ThinkingModel | null> = this.store$.select(fromThinkingSelectors.getThinking);
  edit$: Observable<boolean> = this.store$.select(fromThinkingSelectors.editThinking);
  numberPage$: Observable<number> = this.store$.select(fromThinkingSelectors.numberPage);

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
      description: ['', Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
      author: ['', Validators.compose([formsValidation.verificarCampoVazio, Validators.maxLength(30)])],
      module: ['', [formsValidation.verificarCampoVazio]],
      date: Date.now().toString(),
      update: false
    });
  }

  async ngOnInit() {
    this.numberPage$.pipe(first()).subscribe((totalPage: number) => {
      this.store$.dispatch(fromThinkingActions.LoadThinkings({ payload: totalPage }));
    });

    this.edit$.pipe(first()).subscribe(el => {
      this.edit = el
    });

    if (this.edit) {
      this.thinking$.pipe(first()).subscribe((el: any) => {
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
    return (field.errors?.['campoVazio'] || field.invalid) && form.submitted;
  }

  canceled = () =>
    this.location.back();

}
