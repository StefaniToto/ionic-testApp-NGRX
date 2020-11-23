import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as actions from './../store/recipe.actions';
import * as fromRecipe from './../store/recipe.reducer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { RecipeEffects } from '../store/recipe.effects';

import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { stringify } from 'querystring';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage implements OnInit {
  formGroup: FormGroup;

  constructor(
    public fb: FormBuilder,
    private store: Store<fromRecipe.RecipeState>,
    private router: Router,
    private fileChooser: FileChooser,
    private file: File) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      recipeTitle: ['']
    });
  }

  createRecipe(formGroup): void {
    const recipeCreated = {
      recipeTitle: formGroup.recipeTitle
    };
    this.store.dispatch(actions.addRecipe({recipe: recipeCreated}));
    this.router.navigate(['tabs/recipe']);
  }

  choose() {
    this.fileChooser.open().then((uri) => {
      alert(uri);
    });

  }

}
