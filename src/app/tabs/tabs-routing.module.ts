import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'recipe',
        loadChildren: () => import('../recipe/recipe.module').then(m => m.RecipePageModule)
      },
      {
        path: 'planner',
        loadChildren: () => import('../planner/planner.module').then(m => m.PlannerPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../shopping-list/shopping-list.module').then(m => m.ShoppingListPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/recipe',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/recipe',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
