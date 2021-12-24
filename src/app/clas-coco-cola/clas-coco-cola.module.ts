import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasRoutingModule } from './clas-routing.module';


import { CantinasclaComponent } from './pages/cantinascla/cantinascla.component';
import { ComidasaluclaComponent } from './pages/comidasalucla/comidasalucla.component';
import { FonditaclaComponent } from './pages/fonditacla/fonditacla.component';
import { HamburgueseriaclaComponent } from './pages/hamburgueseriacla/hamburgueseriacla.component';
import { PizzeriaclaComponent } from './pages/pizzeriacla/pizzeriacla.component';
import { RestauranteclaComponent } from './pages/restaurantecla/restaurantecla.component';
import { TaqueriaclaComponent } from './pages/taqueriacla/taqueriacla.component';
import { TorteriaclaComponent } from './pages/torteriacla/torteriacla.component';




@NgModule({
  declarations: [
    CantinasclaComponent,
    ComidasaluclaComponent,
    FonditaclaComponent,
    HamburgueseriaclaComponent,
    PizzeriaclaComponent,
    RestauranteclaComponent,
    TaqueriaclaComponent,
    TorteriaclaComponent
  ],
  imports: [
    CommonModule,
    ClasRoutingModule
  ]
})
export class ClasCocoColaModule { }
