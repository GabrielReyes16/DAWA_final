import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransformacionService } from '../../services/transformacion.service';
import { Transformacion } from '../../models/transformacion';

@Component({
  selector: 'app-crear-transf',
  templateUrl: './crear-transf.component.html',
  styleUrls: ['./crear-transf.component.css']
})
export class CrearTransfComponent implements OnInit {
  transf: Transformacion = new Transformacion('', '', );

  modoEdicion = false;

  constructor(private route: ActivatedRoute, private router: Router, private transformacionService: TransformacionService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.modoEdicion = true;
      this.obtenerTransformacion(id);
    }
  }

  obtenerTransformacion(id: string): void {
    this.transformacionService.obtenerTransformacion(id).subscribe(
      (transf: Transformacion) => {
        this.transf = transf;
        console.log('Transformacion obtenida:', this.transf);
      },
      error => {
        console.error('Error al obtener la transformacion', error);
        // Manejar error o redirigir a una página de error
      }
    );
  }

  guardarTransformacion(): void {
    if (this.modoEdicion) {
      this.transformacionService.actualizarTransformacion(String(this.transf._id), this.transf).subscribe(
        (transf: Transformacion) => {
          console.log('Transformacion actualizada correctamente:', transf);
          // Redirigir a la página de lista de transformaciones u otra página
          this.router.navigate(['/transformaciones']);
        },
        error => {
          console.error('Error al actualizar la transformacion:', error);
          // Manejar error o redirigir a una página de error
        }
      );
    } else {
      this.transformacionService.guardarTransformacion(this.transf).subscribe(
        (transf: Transformacion) => {
          console.log('Transformacion creada correctamente:', transf);
          // Redirigir a la página de lista de transformaciones u otra página
          this.router.navigate(['/transformaciones']);
        },
        error => {
          console.error('Error al crear la transformacion:', error);
          // Manejar error o redirigir a una página de error
        }
      );
    }
  }
}
