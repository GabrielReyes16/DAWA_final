import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearRazaComponent } from './components/crear-raza/crear-raza.component';
import { ListarRazasComponent } from './components/listar-razas/listar-razas.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearRazaComponent,
    ListarRazasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())  // Configura HttpClient para usar fetch
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
