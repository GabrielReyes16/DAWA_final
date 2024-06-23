import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RazaService } from '../../services/raza.service';
import { Raza } from '../../models/raza';

@Component({
  selector: 'app-listar-razas',
  templateUrl: './listar-razas.component.html',
  styleUrls: ['./listar-razas.component.css']
})
export class ListarRazasComponent {
  listRazas: Raza[] = [];

  constructor(private razaService: RazaService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerRazas();
  }

  obtenerRazas(): void {
    this.razaService.getRazas().subscribe( data => {
      console.log(data);
      this.listRazas = data;
    }, error => {
      console.log(error);
    })
    }

  editarRaza(id: string): void {
    this.router.navigate(['/crear-raza', id]);
  }

  eliminarRaza(id: string): void {
    if (confirm('¿Estás seguro de extinguir esta raza?')) {
      this.razaService.eliminarRaza(id).subscribe(
        () => {
          console.log('Raza eliminada correctamente');
          // Actualizar la lista de razas después de eliminar
          this.obtenerRazas();
        },
        error => {
          console.error('Error al eliminar la raza:', error);
        }
      );
    }
  }
}
