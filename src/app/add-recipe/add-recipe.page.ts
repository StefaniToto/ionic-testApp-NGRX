import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

import { AutoUnsubscribe } from 'take-while-alive';
import { AppState } from '../store/app-state.model';
import { AddDataAction } from '../store/actions/recipe-new.actions';
import { NavController } from '@ionic/angular';
import { RecipeItemPage } from '../recipe/recipe-item/recipe-item.page';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
@AutoUnsubscribe()
export class AddRecipePage implements OnInit {
  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
    private store$: Store<AppState>,
    public fb: FormBuilder, 
    private router: Router,
    private fileChooser: FileChooser,
    private file: File) {

  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      recipeTitle: ['']
    });


  }

  createRecipe(formGroup): void {
    console.log("itema added", formGroup)
 
 
    this.store$.dispatch(new AddDataAction({ recipeTitle: formGroup.recipeTitle }))
    //this.router.navigateByUrl(['tabs/recipe']);

   // this.navCtrl.goForward(RecipeItemPage, {
     // params: params
  //  })
  }

  choose() {
    this.fileChooser.open().then((uri) => {
      alert(uri);
    });

  }

}
