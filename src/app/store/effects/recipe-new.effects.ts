import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { RecipeService } from 'src/app/recipe/recipe.service';
import { AutoUnsubscribe } from 'take-while-alive';
import { AddDataAction, AddDataSuccessAction, CustomerDataActionTypes, LoadCDataSuccessAction, LoadDataAction } from '../actions/recipe-new.actions';


@Injectable()
@AutoUnsubscribe()
export class DataEffect {

    loadRecipes$ = createEffect(() =>
        this.actions$.pipe(
            ofType<LoadDataAction>(CustomerDataActionTypes.LOAD_DATA),
            switchMap((action) =>
                this.recipeService.getdata(action.data).pipe(
                    map((data: any) => {
                        console.log('versions', data)
                        return new LoadCDataSuccessAction(data)
                    }),

                )
            )
        )
    );



    addRecipes$ = createEffect(() =>
    this.actions$.pipe(
        ofType<AddDataAction>(CustomerDataActionTypes.ADD_DATA),
        switchMap((action) =>
            this.recipeService.createRecipe(action.data).pipe(
                map((data: any) => {
                    console.log(' add versions', data)
                    return new AddDataSuccessAction(data)
                }),

            )
        )
    )
);

    constructor(
        private recipeService: RecipeService,
        private actions$: Actions,
    ) { }











}
