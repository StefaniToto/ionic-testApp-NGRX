import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Recipe } from '../store/recipe.reducer';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_Recipe(recipe: Recipe) {
    return this.firestore.collection('recipes').add(recipe);
  }

  update_Recipe(recipeId: string, changes){
    this.firestore.doc('recipes/' + recipeId).update(changes);
  }

  delete_Recipe(recipeId: string) {
    this.firestore.doc('recipes/' + recipeId).delete();
  }
}
