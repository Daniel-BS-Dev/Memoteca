import { getThinking } from './selector';
import { catchError, exhaustMap, map, mergeMap, of, switchMap, tap, withLatestFrom } from "rxjs";
import { ThinkingModel } from './../../models/thinking.model';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ThinkingService } from "../service/thinking.service";
import * as fromThinkingTypeActions from "./action";
import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { Store } from "@ngrx/store";

@Injectable()
export class ThinkingEffects {
  constructor(private action$: Actions, private service: ThinkingService,
    private store$: Store, private toastr: ToastrService) { }

  loadThikings$ = createEffect((): any =>
    this.action$.pipe(
      ofType(fromThinkingTypeActions.thinkingTypeAction.LOAD_THINKINGS),
      switchMap(() =>
        this.service.findAll().pipe(
          map((payload: ThinkingModel[]) =>
            fromThinkingTypeActions.LoadThinkingsSuccess({ payload, loading: true })
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
      mergeMap((refresh: any) => {
        return this.service.create(refresh.payload).pipe(
          map(() =>
            fromThinkingTypeActions.CreateThinkingSuccess()
          ),
          catchError(() => of(fromThinkingTypeActions.CreateThinkingFail({ error: 'Ocorreu um erro' })))
        )
      })
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
      mergeMap((refresh: any) =>
        this.service.edit(refresh.payload).pipe(
          map(() =>
            fromThinkingTypeActions.UpdateThinkingSuccess()
          ),
          catchError(() => of(fromThinkingTypeActions.UpdateThinkingFail({ error: 'Ocorreu um erro' })))
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

  DeleteThinking$ = createEffect((): any =>
    this.action$.pipe(
      ofType(fromThinkingTypeActions.thinkingTypeAction.DELETE_THINKING),
      exhaustMap((refresh: any) =>
        this.service.delete(refresh.payload).pipe(
          map(() =>
            fromThinkingTypeActions.DeleteThinkingSuccess(),
            catchError(() => of(fromThinkingTypeActions.DeleteThinkingFail({ error: 'Ocorreu um erro.' })))
          )
        )
      )
    )
  );

  successDeleteThinking$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromThinkingTypeActions.thinkingTypeAction.DELETE_THINKING_SUCCESS),
      tap(() => {
        this.toastr.success('Pensamento Deletado com sucesso.');
      })),

    { dispatch: false }
  );

  errorDeleteThinking$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromThinkingTypeActions.thinkingTypeAction.CREATE_THINKING_FAIL),
      tap((error: any) => {
        this.toastr.error(error.error);
      })),

    { dispatch: false }
  );

  FavoriteThinking$ = createEffect((): any =>
    this.action$.pipe(
      ofType(fromThinkingTypeActions.thinkingTypeAction.FAVORITE_THINKING),
      exhaustMap((refresh: any) => {
        return this.service.toFavorite(refresh.payload).pipe(
          map(() =>
            fromThinkingTypeActions.FavoriteThinkingSuccess({ payload: refresh.payload })
          )
        )
      }
      )
    )
  );

  successFavoriteThinking$ = createEffect(() =>
    this.action$.pipe(
      ofType(fromThinkingTypeActions.thinkingTypeAction.FAVORITE_THINKING_SUCCESS),
      tap((rep: any) => {
        this.toastr.success(
          rep.payload.favorite ? 'Pensamento salvo como favorito.'
            : 'Pensamento salvo como não favorito.'
        );
      })),

    { dispatch: false }
  );
}
