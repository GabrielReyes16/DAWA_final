import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GuerreroService } from '../../services/guerrero.service';
import { GuerreroCard } from '../../models/guerrero-card';

@Component({
  selector: 'app-listar-guerreros',
  templateUrl: './listar-guerreros.component.html',
  styleUrls: ['./listar-guerreros.component.css']
})
export class ListarGuerrerosComponent {
  listGuerreros: GuerreroCard[] = [];

  constructor(private guerreroService: GuerreroService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerGuerreros();
  }

  obtenerGuerreros(): void {
    this.guerreroService.getGuerreros().subscribe( data => {
      console.log(data);
      this.listGuerreros = data;
    }, error => {
      console.log(error);
    })
    }

  editarGuerrero(id: string): void {
    this.router.navigate(['/crear-guerrero', id]);
  }

  eliminarGuerrero(id: string): void {
    if (confirm('¿Estás seguro de eliminar a este guerrero?')) {
      this.guerreroService.eliminarGuerrero(id).subscribe(
        () => {
          console.log('Guerrero eliminado correctamente');
          // Actualizar la lista de razas después de eliminar
          this.obtenerGuerreros();
        },
        error => {
          console.error('Error al eliminar al guerrero:', error);
        }
      );
    }
  }
}
