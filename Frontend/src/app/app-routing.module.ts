import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//razas
import { ListarRazasComponent } from './components/listar-razas/listar-razas.component';
import { CrearRazaComponent } from './components/crear-raza/crear-raza.component';

//guerreros
import { ListarGuerrerosComponent } from './components/listar-guerreros/listar-guerreros.component';
import { CrearGuerreroComponent } from './components/crear-guerrero/crear-guerrero.component';

//transformaciones
import { ListarTransfComponent } from './components/listar-transf/listar-transf.component';
import { CrearTransfComponent } from './components/crear-transf/crear-transf.component';

//guerrero en card
import { GuerreroCardComponent } from './components/guerrero-card/guerrero-card.component';

const routes: Routes = [

  //razas
  { path: 'razas', component: ListarRazasComponent },
  { path: 'crear-raza', component: CrearRazaComponent },
  { path: 'editar-raza/:id', component: CrearRazaComponent },

  //guerreros
  { path: 'guerreros', component: ListarGuerrerosComponent},
  { path: 'crear-guerrero', component: CrearGuerreroComponent },
  { path : 'editar-guerrero/:id', component: CrearGuerreroComponent },

  //transformaciones
  { path: 'transformaciones', component: ListarTransfComponent },
  { path: 'crear-transf', component: CrearTransfComponent },
  { path : 'editar-transf/:id', component: CrearTransfComponent },

  //guerreros en card
  { path: '', component: GuerreroCardComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
