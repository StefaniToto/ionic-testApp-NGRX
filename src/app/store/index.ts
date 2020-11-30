import { ActionReducerMap } from '@ngrx/store';
import { recipeReducer } from '../store/recipe.reducer';

export const reducers: ActionReducerMap<any> = {
    recipes: recipeReducer
};
