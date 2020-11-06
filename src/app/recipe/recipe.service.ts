import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { Recipe } from '../store/recipe.reducer';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  createRecipe(recipe: Recipe): Observable<any> {
    return from(this.firestore.collection<Recipe>('recipes').add(recipe));
  }


  getRecipes(): Observable<Recipe[]> {
    return this.firestore.collection<Recipe>('recipes').valueChanges();

  }

  getRecipe(recipeId: string): Observable<any> {
    return from(this.firestore.doc('recipes/' + recipeId).snapshotChanges());

  }
}
