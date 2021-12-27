import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalpageComponent } from './shared/principalpage/principalpage.component';
import { RUTASLAZYLOADComponent } from './components/utils/rutaslazyload/rutaslazyload.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalpageComponent,
    RUTASLAZYLOADComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
