import { NgModule } from '@angular/core';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';


import {FormsModule} from "@angular/forms";

import {MenuComponent} from "./menu.component";
import {RouteReuseStrategy} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {MenuRoutingModule} from "./menu-routing.module";

@NgModule({
  declarations: [MenuComponent],
  imports: [
    IonicModule.forRoot(),
    MenuRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }]
})
export class MenuModule {}
