import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuerreroService } from '../../services/guerrero.service';
import { GuerreroCard, Transformacion, Raza } from '../../models/guerrero-card';
import { RazaService } from '../../services/raza.service';
import { TransformacionService } from '../../services/transformacion.service';

@Component({
  selector: 'app-crear-guerrero',
  templateUrl: './crear-guerrero.component.html',
  styleUrls: ['./crear-guerrero.component.css']
})
export class CrearGuerreroComponent implements OnInit {

  guerrero: GuerreroCard = new GuerreroCard('', '', null, [], '', ''); // Inicializar con valores adecuados
  modoEdicion = false;

  razasDisponibles: Raza[] = []; // Lista de razas disponibles
  transformacionesDisponibles: Transformacion[] = []; // Lista de transformaciones disponibles

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private guerreroService: GuerreroService,
    private razaService: RazaService,
    private transformacionService: TransformacionService
  ) {}

  ngOnInit(): void {
    this.cargarRazasDisponibles();
    this.cargarTransformacionesDisponibles();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.modoEdicion = true;
      this.obtenerGuerrero(id);
    }
  }

  cargarRazasDisponibles(): void {
    this.razaService.getRazas().subscribe(
      (razas: Raza[]) => {
        this.razasDisponibles = razas;
      },
      error => {
        console.error('Error al obtener las razas', error);
        // Manejar error o redirigir a una página de error
      }
    );
  }

  cargarTransformacionesDisponibles(): void {
    this.transformacionService.getTransformaciones().subscribe(
      (transformaciones: Transformacion[]) => {
        this.transformacionesDisponibles = transformaciones;
      },
      error => {
        console.error('Error al obtener las transformaciones', error);
        // Manejar error o redirigir a una página de error
      }
    );
  }

  obtenerGuerrero(id: string): void {
    this.guerreroService.obtenerGuerrero(id).subscribe(
      (guerrero: GuerreroCard) => {
        this.guerrero = guerrero;
        console.log('Guerrero obtenido:', this.guerrero);
      },
      error => {
        console.error('Error al obtener el guerrero', error);
        // Manejar error o redirigir a una página de error
      }
    );
  }

  guardarGuerrero(): void {
    if (this.modoEdicion) {
      this.guerreroService.actualizarGuerrero(String(this.guerrero._id), this.guerrero).subscribe(
        (guerrero: GuerreroCard) => {
          console.log('Guerrero actualizado correctamente:', guerrero);
          // Redirigir a la página de lista de guerreros u otra página según tu flujo
          this.router.navigate(['/guerreros']);
        },
        error => {
          console.error('Error al actualizar el guerrero:', error);
          // Manejar error o redirigir a una página de error
        }
      );
    } else {
      this.guerreroService.guardarGuerrero(this.guerrero).subscribe(
        (guerrero: GuerreroCard) => {
          console.log('Guerrero creado correctamente:', guerrero);
          // Redirigir a la página de lista de guerreros u otra página según tu flujo
          this.router.navigate(['/guerreros']);
        },
        error => {
          console.error('Error al crear el guerrero:', error);
          // Manejar error o redirigir a una página de error
        }
      );
    }
  }
}
