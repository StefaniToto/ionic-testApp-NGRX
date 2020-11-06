
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import * as RecipeActions from './recipe.actions';

export const recipesFeatureKey = 'recipes';

export interface Recipe {
    recipeId: string;
    recipeTitle: string;
}

// entity adapter
export const recipeAdapter: EntityAdapter<Recipe> = createEntityAdapter<Recipe>();
export interface RecipeState extends EntityState<Recipe> {
  error: any;
  selectedRecipe: Recipe;
}

export const initialState: RecipeState = recipeAdapter.getInitialState({
  error: undefined,
  selectedRecipe: undefined
});

export const recipeReducer = createReducer(
  initialState,

  on(RecipeActions.addRecipeSuccess, (state, action) => {
    return recipeAdapter.addOne(action.recipe, state);
  }),
  on(RecipeActions.addRecipeFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }),
  on(RecipeActions.loadRecipesSuccess, (state, action) =>
    recipeAdapter.setAll(action.recipes, state)
  ),
  on(RecipeActions.loadRecipesFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }
  ),
  on(RecipeActions.loadRecipeSuccess, (state, action) => {
    return {
      ...state,
      selectedRecipe: action.selectedRecipe
    };
  }
  ),
  on(RecipeActions.loadRecipeFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }
  ),
);

export function reducer(state: RecipeState | undefined, action: Action) {
  return recipeReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = recipeAdapter.getSelectors();

