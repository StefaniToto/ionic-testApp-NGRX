import { Injectable } from '@angular/core';
import { Observable, merge, from, of } from 'rxjs';
import { Action } from '@ngrx/store';

import { Recipe } from './recipe.reducer';
import * as fromRecipeActions from './recipe.actions';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { switchMap, mergeMap, map, catchError} from 'rxjs/operators';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { RecipeService } from '../recipe/recipe.service';

@Injectable()
export class RecipeEffects {

    loadRecipes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromRecipeActions.loadRecipes),
            mergeMap(action =>
                this.recipeService.getRecipes().pipe(
                    map(recipes => fromRecipeActions.loadRecipesSuccess({ recipes })),
                    catchError(error =>
                        of(fromRecipeActions.loadRecipesFailure({ error }))
                    )
                )
            )
        )
    );

    loadRecipe$ = createEffect(() =>
    this.actions$.pipe(
        ofType(fromRecipeActions.loadRecipe),
        mergeMap(action =>
            this.recipeService.getRecipe(action.id).pipe(
                map(recipe => fromRecipeActions.loadRecipeSuccess({selectedRecipe: recipe})),
                catchError(error =>
                    of(fromRecipeActions.loadRecipeFailure({ error }))
                )
            )
        )
    )
);

    createRecipe$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromRecipeActions.addRecipe),
            mergeMap(action =>
                this.recipeService.createRecipe(action.recipe).pipe(
                    map(recipe => fromRecipeActions.addRecipeSuccess({recipe})),
                    catchError(error =>
                        of(fromRecipeActions.addRecipeFailure({ error }))
                    )
                )
            )
        )
    );


    constructor(private actions$: Actions, private afs: AngularFirestore, private recipeService: RecipeService) {}

}
