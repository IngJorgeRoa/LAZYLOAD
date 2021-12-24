import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CantinasclaComponent } from './pages/cantinascla/cantinascla.component';
import { ComidasaluclaComponent } from './pages/comidasalucla/comidasalucla.component';
import { FonditaclaComponent } from './pages/fonditacla/fonditacla.component';
import { HamburgueseriaclaComponent } from './pages/hamburgueseriacla/hamburgueseriacla.component';
import { PizzeriaclaComponent } from './pages/pizzeriacla/pizzeriacla.component';
import { RestauranteclaComponent } from './pages/restaurantecla/restaurantecla.component';
import { TaqueriaclaComponent } from './pages/taqueriacla/taqueriacla.component';
import { TorteriaclaComponent } from './pages/torteriacla/torteriacla.component';
import { PrincipalpageComponent } from '../shared/principalpage/principalpage.component';

const routes: Routes = 
[
    {
      path:'',
      children: 
      [

        { path:'cantinascla', component: CantinasclaComponent  },
        { path:'comidasacla',  component: ComidasaluclaComponent },
        { path:'fonditacla',  component: FonditaclaComponent },
        { path:'hamburguesriacla',  component: HamburgueseriaclaComponent },
        { path:'pizzeriacla',  component: PizzeriaclaComponent },
        { path:'restaurantecla',  component: RestauranteclaComponent },
        { path:'taqueriacla',  component: TaqueriaclaComponent },
        { path:'torteriacla',  component: TorteriaclaComponent },

      ]
    },
    {
      path:'**',  component: PrincipalpageComponent
    }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class ClasRoutingModule { }
