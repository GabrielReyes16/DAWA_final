import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarRazasComponent } from './components/listar-razas/listar-razas.component';
import { CrearRazaComponent } from './components/crear-raza/crear-raza.component';

const routes: Routes = [
  { path: 'razas', component: ListarRazasComponent },
  { path: 'crear-raza', component: CrearRazaComponent },
  { path: 'editar-raza/:id', component: CrearRazaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
