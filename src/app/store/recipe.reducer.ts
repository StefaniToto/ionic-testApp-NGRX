import * as actions from '../store/recipe.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

export interface Recipe {
    id: string;
    recipeTitle: string;
}

// entity adapter
export const recipeAdapter = createEntityAdapter<Recipe>();
export interface State extends EntityState<Recipe> {}

export const initialState: State = recipeAdapter.getInitialState();


// reducer
export function recipeReducer(
    state: State = initialState,
    action: actions.RecipeActions) {

        switch (action.type) {

            case actions.ADDED:
                return recipeAdapter.addOne(action.payload, state);

            case actions.MODIFIED:
                return recipeAdapter.updateOne({
                    id: action.payload.id,
                    changes: action.payload,
                }, state);

            case actions.REMOVED:
                return recipeAdapter.removeOne(action.payload.id, state);

            default:
                return state;
        }
    }

// create default selectors
export const getRecipeState = createFeatureSelector<State>('recipe');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = recipeAdapter.getSelectors(getRecipeState);

