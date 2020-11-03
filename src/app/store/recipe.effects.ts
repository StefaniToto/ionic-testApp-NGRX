import { Injectable } from '@angular/core';
import { Observable, merge, of } from 'rxjs';
import { Action } from '@ngrx/store';

import { Recipe } from './recipe.reducer';
import * as recipeActions from './recipe.actions';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { switchMap, mergeMap, map, catchError} from 'rxjs/operators';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { from } from 'rxjs';
import { RecipeService } from '../recipe/recipe.service';

@Injectable()
export class RecipeEffects {

//    createRecipe$ = createEffect(() =>
  //      this.actions$.pipe(
    //        ofType(recipeActions.Added),
      ///      map((action: recipeActions.Added) => action),
         //   switchMap(action => {
           ///     return this.afs.collection<Recipe>('recipes').add(action.payload);
            ////}
           /// )
        //)
    //);


    @Effect()
    query$: Observable<Action> = this.actions$.pipe(
        ofType(recipeActions.QUERY),
        switchMap(action => {
            console.log(action);
            return this.afs.collection<Recipe>('recipes').stateChanges();
        }),
        mergeMap(actions => actions),
        map(action => {
            return {
                type: `[RECIPE] ${action.type}`,
                payload: {
                    ...action.payload.doc.data(),
                    id: action.payload.doc.id
                }
            };
        })
    );


    @Effect() update$: Observable<Action> = this.actions$.pipe(
        ofType(recipeActions.UPDATE),
        map((action: recipeActions.Update) => action),
        switchMap(data => {
            const ref = this.afs.doc<Recipe>(`recipes/${data.id}`);
            return from( ref.update(data.changes));
        }),
        map(() => new recipeActions.Success())
    );

    constructor(private actions$: Actions, private afs: AngularFirestore, private recipeService: RecipeService) {}

}
