import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipePage } from './recipe.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RecipePageRoutingModule } from './recipe-routing.module';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { recipeReducer } from './../store/recipe.reducer';
import { RecipeEffects } from './../store/recipe.effects';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    StoreModule.forFeature('recipe', recipeReducer),
    EffectsModule.forFeature([RecipeEffects]),
    FormsModule,
    ExploreContainerComponentModule,
    RecipePageRoutingModule
  ],
  declarations: [RecipePage, RecipeItemComponent]
})
export class RecipePageModule {}
