import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RazaService } from '../../services/raza.service';
import { Raza } from '../../models/raza';

@Component({
  selector: 'app-crear-raza',
  templateUrl: './crear-raza.component.html',
  styleUrls: ['./crear-raza.component.css']
})
export class CrearRazaComponent implements OnInit {
  raza: Raza = new Raza('', '', '', ); // Inicializa con valores vacíos o adecuados según tu modelo y estado

  modoEdicion = false;

  constructor(private route: ActivatedRoute, private router: Router, private razaService: RazaService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.modoEdicion = true;
      this.obtenerRaza(id);
    }
  }

  obtenerRaza(id: string): void {
    this.razaService.obtenerRaza(id).subscribe(
      (raza: Raza) => {
        this.raza = raza;
        console.log('Raza obtenida:', this.raza);
      },
      error => {
        console.error('Error al obtener la raza', error);
        // Manejar error o redirigir a una página de error
      }
    );
  }

  guardarRaza(): void {
    if (this.modoEdicion) {
      this.razaService.actualizarRaza(String(this.raza._id), this.raza).subscribe(
        (raza: Raza) => {
          console.log('Raza actualizada correctamente:', raza);
          // Redirigir a la página de lista de razas u otra página según tu flujo
          this.router.navigate(['/razas']);
        },
        error => {
          console.error('Error al actualizar la raza:', error);
          // Manejar error o redirigir a una página de error
        }
      );
    } else {
      this.razaService.guardarRaza(this.raza).subscribe(
        (raza: Raza) => {
          console.log('Raza creada correctamente:', raza);
          // Redirigir a la página de lista de razas u otra página según tu flujo
          this.router.navigate(['/razas']);
        },
        error => {
          console.error('Error al crear la raza:', error);
          // Manejar error o redirigir a una página de error
        }
      );
    }
  }
}
