import { ThinkingModel } from './../../models/thinking.model';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, switchMap, tap } from "rxjs";
import { ThinkingService } from "../service/thinking.service";
import * as fromThinkingTypeActions from "./action";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ThinkingEffects {
  constructor(private action$: Actions, private service: ThinkingService, private toastr: ToastrService) { }

  loadThikings$ = createEffect((): any =>
    this.action$.pipe(
      ofType(fromThinkingTypeActions.thinkingTypeAction.LOAD_THINKINGS),
      switchMap(() =>
        this.service.findAll().pipe(
          map((payload: ThinkingModel[]) =>
            fromThinkingTypeActions.LoadThinkingsSuccess({ payload })
          ),
          catchError(() => of(fromThinkingTypeActions.LoadThinkingsFail({ error: 'Ocorreu um erro' })))
        )
      )
    )
  );

  errorLoadThinkings$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromThinkingTypeActions.thinkingTypeAction.LOAD_THINKINGS_FAIL),
      tap((error: any) => {
        this.toastr.error(error.error);
      })),

    { dispatch: false }
  );

  LoadThinking$ = createEffect((): any =>
    this.action$.pipe(
      ofType(fromThinkingTypeActions.thinkingTypeAction.LOAD_THINKING_SUCCESS),
      exhaustMap((refresh: any) =>
        this.service.getById(refresh.payload).pipe(
          map((payload: ThinkingModel) =>
            fromThinkingTypeActions.LoadThinkingSuccess({ payload }),
            catchError((error) => of(fromThinkingTypeActions.LoadThinkingFail({ error })))
          )
        )
      )
    )
  );

  CreateThinking$ = createEffect((): any =>
    this.action$.pipe(
      ofType(fromThinkingTypeActions.thinkingTypeAction.CREATE_THINKING),
      exhaustMap((refresh: any) =>
        this.service.create(refresh.payload).pipe(
          map(() =>
            fromThinkingTypeActions.CreateThinkingSuccess(),
            catchError(() => of(fromThinkingTypeActions.CreateThinkingFail({ error: 'Ocorreu um erro' })))
          )
        )
      )
    )
  );

  successCreateThinking$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromThinkingTypeActions.thinkingTypeAction.CREATE_THINKING_SUCCESS),
      tap(() => {
        this.toastr.success('Pensamento adicionado com sucesso.');
      })),

    { dispatch: false }
  );

  errorCreateThinking$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromThinkingTypeActions.thinkingTypeAction.CREATE_THINKING_FAIL),
      tap((error: any) => {
        this.toastr.error(error.error);
      })),

    { dispatch: false }
  );

  UpdateThinking$ = createEffect((): any =>
    this.action$.pipe(
      ofType(fromThinkingTypeActions.thinkingTypeAction.UPDATE_THINKING),
      exhaustMap((refresh: any) =>
        this.service.edit(refresh.payload).pipe(
          map(() =>
            fromThinkingTypeActions.UpdateThinkingSuccess(),
            catchError(() => of(fromThinkingTypeActions.UpdateThinkingFail({ error: 'Ocorreu um erro' })))
          )
        )
      )
    )
  );

  successUpdateThinking$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromThinkingTypeActions.thinkingTypeAction.UPDATE_THINKING_SUCCESS),
      tap(() => {
        this.toastr.success('Pensamento atualizado com sucesso.');
      })),

    { dispatch: false }
  );

  errorUpdateThinking$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromThinkingTypeActions.thinkingTypeAction.CREATE_THINKING_FAIL),
      tap((error: any) => {
        this.toastr.error(error.error);
      })),

    { dispatch: false }
  );

}
