import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Recipe } from './recipe.reducer';

// Load list of recipes
export const loadRecipes = createAction(
    '[Recipe List Component] Load Recipes',
);

export const loadRecipesSuccess = createAction(
    '[Recipe List Effect] Load Recipe Success',
    props<{ recipes: Recipe[] }>()
);

export const loadRecipesFailure = createAction(
    '[Recipe List Effect] Load Recipe Failure',
    props<{ error: any }>()
);

// Load Recipe
export const loadRecipe = createAction(
    '[Recipe Component] Load Recipe',
    props<{ id: string }>()
);

export const loadRecipeSuccess = createAction(
    '[Recipe Effect] Load Recipe Success',
    props<{ selectedRecipe: Recipe }>()
);

export const loadRecipeFailure = createAction(
    '[Recipe Effect] Load Recipe Failure',
    props<{ error: any }>()
);

// Add Recipe
export const addRecipe = createAction(
    '[Recipe Add Component] Add Recipe',
    props<{ recipe: Recipe }>()
);

export const addRecipeSuccess = createAction(
    '[Recipe Add Effect] Add Recipe Success',
    props<{ recipe: Recipe }>()
);

export const addRecipeFailure = createAction(
    '[Recipe Add Effect] Add Recipe Failure',
    props<{ error: any }>()
);