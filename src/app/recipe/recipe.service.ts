import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from '../store/recipe.reducer';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  createRecipe(recipe): Observable<any> {
      return from(this.firestore.collection(`recipes`).add(recipe));
  }


  getRecipes(): Observable<any[]> {
    return this.firestore.collection<Recipe>('recipes').snapshotChanges().pipe(map(arr => {
      return arr.map(doc => {
        const data = doc.payload.doc.data();
        return {
          id: doc.payload.doc.id,
          ...data
        } as Recipe;
    });
  }));
}


  deleteRecipe(recipeId: string) {
    return from(this.firestore.collection<Recipe>('recipes/').doc(recipeId).delete());

  }

}
