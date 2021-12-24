import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantereserComponent } from './pages/restaurantereser/restaurantereser.component';
import { BaresreserComponent } from './pages/baresreser/baresreser.component';
import { AntrosreserComponent } from './pages/antrosreser/antrosreser.component';
import { BeachclubsreserComponent } from './pages/beachclubsreser/beachclubsreser.component';
import { PromococacolareserComponent } from './pages/promococacolareser/promococacolareser.component';
import { ReserRoutingModule } from './reser-routing.module';



@NgModule({
  declarations: [
    RestaurantereserComponent,
    BaresreserComponent,
    AntrosreserComponent,
    BeachclubsreserComponent,
    PromococacolareserComponent
  ],
  imports: [
    CommonModule,
    ReserRoutingModule
  ]
})
export class ReservacionesModule { }
