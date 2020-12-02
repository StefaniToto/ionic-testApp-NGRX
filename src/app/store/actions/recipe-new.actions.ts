import { Action } from '@ngrx/store';


export enum CustomerDataActionTypes {

  LOAD_DATA = '[CUSTOMER] Get  DATA',
  LOAD_DATA_SUCESS = '[CUSTOMER] Load  DATA Success',


  ADD_DATA = '[CUSTOMER]  ADD_DATA DATA',
  ADD_DATA_SUCESS = '[CUSTOMER]  ADD_DATA DATA Success',


}

//load  data
export class LoadDataAction implements Action {
  readonly type = CustomerDataActionTypes.LOAD_DATA;
  constructor(public data: any) { }
}

export class LoadCDataSuccessAction implements Action {
  readonly type = CustomerDataActionTypes.LOAD_DATA_SUCESS;
  constructor(public data: any) { }
}

//add data
export class AddDataAction implements Action {
  readonly type = CustomerDataActionTypes.ADD_DATA;
  constructor(public data: any) { }
}

export class AddDataSuccessAction implements Action {
  readonly type = CustomerDataActionTypes.ADD_DATA_SUCESS;
  constructor(public data: any) { }
}




export type CustomerAction =
  LoadDataAction |
  LoadCDataSuccessAction |
  AddDataAction |
  AddDataSuccessAction
  ;
