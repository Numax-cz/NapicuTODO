import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu.component";


const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'u',
        loadChildren: () => import('./user/user.module').then(m => m.UserPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}
