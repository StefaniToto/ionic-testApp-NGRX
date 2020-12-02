import { CustomerDataActionTypes } from '../actions/recipe-new.actions';

const initialState: {
    data: Array<any>;
} = { data: [] };

export function addDataReducer(state = initialState, action) {
    switch (action.type) {
        case CustomerDataActionTypes.ADD_DATA_SUCESS:
            console.log('ADD data sucess', action);
            return action;
        default:
            return state;
    }
}
