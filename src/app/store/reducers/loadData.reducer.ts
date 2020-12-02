import { CustomerDataActionTypes } from '../actions/recipe-new.actions';

const initialState: {
  data: Array<any>;
} = { data: [] };

export function CustomerDefaultReducer(state = initialState, action) {
  switch (action.type) {
    case CustomerDataActionTypes.LOAD_DATA_SUCESS:
     console.log('LOAD_Data_SUCCESS', action);
      return action;
    default:
      return state;
  }
}
