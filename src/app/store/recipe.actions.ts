import { Action } from '@ngrx/store';
import { Recipe } from './recipe.reducer';

export const QUERY = '[RECIPE] query recipes';

export const ADDED = '[RECIPE] added';
export const MODIFIED = '[RECIPE] modified';
export const REMOVED = '[RECIPE] removed';

export const UPDATE = '[RECIPE] update';
export const SUCCESS = '[RECIPE] update success';

export class Query implements Action {
    readonly type = QUERY;
    constructor() {}
}

export class Added implements Action {
    readonly type = ADDED;
    constructor(public payload: Recipe) {}
}

export class Modified implements Action {
    readonly type = MODIFIED;
    constructor(public payload: Recipe) {}
}


// run firestore update
export class Update implements Action {
    readonly type = UPDATE;
    constructor(
        public id: string,
        public changes: Partial<Recipe>
        ) {}
}

export class Removed implements Action {
    readonly type = REMOVED;
    constructor(public payload: Recipe) {}
}

export class Success implements Action {
    readonly type = SUCCESS;
    constructor() {}
}

export type RecipeActions
= Added
| Update
| Removed
| Modified
| Success;

