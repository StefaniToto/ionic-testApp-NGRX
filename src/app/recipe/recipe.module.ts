import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipePage } from './recipe.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RecipePageRoutingModule } from './recipe-routing.module';


import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RecipeItemPage } from './recipe-item/recipe-item.page';
import { RecipeItemPageRoutingModule } from './recipe-item/recipe-item-routing.module';
import { DataEffect } from '../store/effects/recipe-new.effects';
import { addDataReducer } from '../store/reducers/addData.reducer';
import { CustomerDefaultReducer } from '../store/reducers/loadData.reducer';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RecipePageRoutingModule,
    RecipeItemPageRoutingModule,
    StoreModule.forFeature('loadDefaultCustomerdata', CustomerDefaultReducer),
    StoreModule.forFeature('addDataReducer', addDataReducer),
    
    EffectsModule.forFeature([
      DataEffect
    ]),
 
  ],
  declarations: [RecipePage, RecipeItemPage],
  entryComponents : [RecipeItemPage],
  providers:[RecipeItemPage]
})
export class RecipePageModule {}
