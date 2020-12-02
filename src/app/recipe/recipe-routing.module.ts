import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipePage } from './recipe.page';

const routes: Routes = [
  {
    path: '',
    component: RecipePage,
  },
  {
    path: 'recipe-item',
    loadChildren: () => import('./recipe-item/recipe-item.module').then( m => m.RecipeItemPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipePageRoutingModule {}
