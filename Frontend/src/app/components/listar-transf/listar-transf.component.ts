import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransformacionService } from '../../services/transformacion.service';
import { Transformacion } from '../../models/transformacion';

@Component({
  selector: 'app-listar-transf',
  templateUrl: './listar-transf.component.html',
  styleUrls: ['./listar-transf.component.css']
})
export class ListarTransfComponent {
  listTransf: Transformacion[] = [];

  constructor(private transformacionService: TransformacionService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerTransformaciones();
  }

  obtenerTransformaciones(): void {
    this.transformacionService.getTransformaciones().subscribe( data => {
      console.log(data);
      this.listTransf = data;
    }, error => {
      console.log(error);
    })
    }

  editarRaza(id: string): void {
    this.router.navigate(['/crear-raza', id]);
  }

  eliminarTransformacion(id: string): void {
    if (confirm('¿Estás seguro de extinguir esta raza?')) {
      this.transformacionService.eliminarTransformacion(id).subscribe(
        () => {
          console.log('Transformacion eliminada correctamente');
          // Actualizar la lista de transformaciones después de eliminar
          this.obtenerTransformaciones();
        },
        error => {
          console.error('Error al eliminar la Transformacion:', error);
        }
      );
    }
  }
}
