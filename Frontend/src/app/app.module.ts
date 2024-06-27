import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient , withFetch} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// razas
import { CrearRazaComponent } from './components/crear-raza/crear-raza.component';
import { ListarRazasComponent } from './components/listar-razas/listar-razas.component';
// guerrero-card
import { GuerreroCardComponent } from './components/guerrero-card/guerrero-card.component';
// transformaciones
import { CrearTransfComponent } from './components/crear-transf/crear-transf.component';
import { ListarTransfComponent } from './components/listar-transf/listar-transf.component';
// guerrero
import { ListarGuerrerosComponent } from './components/listar-guerreros/listar-guerreros.component';
import { CrearGuerreroComponent } from './components/crear-guerrero/crear-guerrero.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearRazaComponent,
    ListarRazasComponent,
    GuerreroCardComponent,
    CrearTransfComponent,
    ListarTransfComponent,
    CrearGuerreroComponent,
    ListarGuerrerosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()), // Configura HttpClient para usar fetch
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
