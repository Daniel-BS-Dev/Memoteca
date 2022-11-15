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

}
