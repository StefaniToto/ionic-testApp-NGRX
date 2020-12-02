import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-state.model';
import { AutoUnsubscribe, takeWhileAlive } from 'take-while-alive';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.page.html',
  styleUrls: ['./recipe-item.page.scss'],
})
@AutoUnsubscribe()
export class RecipeItemPage implements OnInit {
  recipes: any = [];


  constructor(
    private store$: Store<AppState>,
  ) {

    this.loadData()
  }

  ngOnInit() { }

  loadData() {
    this.store$
      .select((store) =>
        store.loadDefaultCustomerdata)
      .pipe(takeWhileAlive(this))
      .subscribe((stateData) => {
        this.recipes = stateData.data;
        console.log(" this.recipes date", this.recipes)
      })
  }

  // onClick(item) {
  //   console.log('you clicked on' + item);
  // }

  // deleteRecipe(id: string) {
  //   this.store.dispatch(actions.deleteRecipe({ id }));
  //   console.log(id);
  //  }
}