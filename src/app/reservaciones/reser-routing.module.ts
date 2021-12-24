import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalpageComponent } from '../shared/principalpage/principalpage.component';
import { AntrosreserComponent } from './pages/antrosreser/antrosreser.component';
import { BaresreserComponent } from './pages/baresreser/baresreser.component';
import { BeachclubsreserComponent } from './pages/beachclubsreser/beachclubsreser.component';
import { PromococacolareserComponent } from './pages/promococacolareser/promococacolareser.component';
import { RestaurantereserComponent } from './pages/restaurantereser/restaurantereser.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'restaurantereser',
        component: RestaurantereserComponent
      },
      {
        path: 'baresreser',
        component: BaresreserComponent
      },
      {
        path: 'antroreser',
        component: AntrosreserComponent
      },
      {
        path:'beachclubs',
        component: BeachclubsreserComponent
      },
      {
        path:'promococacola',
        component:PromococacolareserComponent
      }
     
    ]
  },
  {
    path: '**',
    component: PrincipalpageComponent
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
export class ReserRoutingModule { }
