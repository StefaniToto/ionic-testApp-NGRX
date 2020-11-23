import { createFeatureSelector, createSelector  } from '@ngrx/store';
import { recipesFeatureKey, RecipeState, selectAll } from './recipe.reducer';

export const selectProductState = createFeatureSelector<RecipeState>(
    recipesFeatureKey
);

export const selectRecipes = createSelector(selectProductState, selectAll);
export const selectedRecipe = createSelector(selectProductState, (state: RecipeState) => state.selectedRecipe);

// export const getRecipe = (id: string) => createSelector(selectRecipes, (recipes) => {
//     const found = recipes.find(r => r.id === id);
//     return found ? found : null;
// });
