import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalpageComponent } from './shared/principalpage/principalpage.component';

const routes: Routes = [
  {
    path: 'reservaciones',
    loadChildren: () => import('./reservaciones/reservaciones.module').then( m => m.ReservacionesModule )
  },
  {
    path: 'clas-coco-cola',
    loadChildren: () => import('./clas-coco-cola/clas-coco-cola.module').then( m => m.ClasCocoColaModule )
  },
  {
    path: 'Home',
    component: PrincipalpageComponent
  },
  {
    path: '**',
    redirectTo: 'Home'
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
