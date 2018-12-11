import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Servicios
import { VoteService } from './services/vote.service';

// Gráfica
import { ChartsModule } from 'ng2-charts';
import { GraficasComponent } from './components/graficas/graficas.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficasComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [
    VoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
