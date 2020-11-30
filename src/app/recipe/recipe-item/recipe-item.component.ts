import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRecipe from './../../store/recipe.reducer';
import * as actions from './../../store/recipe.actions';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipes;

  constructor(private store: Store<fromRecipe.RecipeState>) { }

  ngOnInit() {}

  onClick(item) {
    console.log('you clicked on' + item);
  }

  deleteRecipe(id: string) {
    this.store.dispatch(actions.deleteRecipe({ id }));
    console.log(id);
   }
}
