import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./menu/user/login/login.component";
import {RegisterComponent} from "./menu/user/register/register.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
