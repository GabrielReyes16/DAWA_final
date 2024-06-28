import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GuerreroCard } from '../models/guerrero-card';
import { Raza } from '../models/raza';
import { Transformacion } from '../models/transformacion';
@Injectable({
  providedIn: 'root'
})
export class GuerreroService {
  url = 'http://localhost:4000/api/guerreros/';

  constructor(private http: HttpClient) {}

  // Obtener todos los guerreros
  getGuerreros(): Observable<GuerreroCard[]> {
    return this.http.get<GuerreroCard[]>(this.url).pipe(
      map((guerreros: any[]) => {
        return guerreros.map(guerrero => new GuerreroCard(
          guerrero.nombre,
          guerrero.descripcion,
          guerrero.raza,
          guerrero.transformaciones,
          guerrero.estado,
          guerrero.foto,
          guerrero._id
        ));
      })
    );
  }

  // Obtener un guerrero por su ID
  obtenerGuerrero(id: string): Observable<GuerreroCard> {
    return this.http.get<GuerreroCard>(`${this.url}${id}`).pipe(
      map(guerrero => new GuerreroCard(
        guerrero.nombre,
        guerrero.descripcion,
        guerrero.raza,
        guerrero.transformaciones,
        guerrero.estado,
        guerrero.foto,
        guerrero._id
      ))
    );
  }

  // Eliminar un guerrero por su ID (actualización de estado)
  eliminarGuerrero(id: string): Observable<any> {
    return this.http.put(`${this.url}${id}`, { estado: 'Muerto' });
  }

  // Guardar un nuevo guerrero
  guardarGuerrero(guerrero: GuerreroCard): Observable<GuerreroCard> {
    return this.http.post<GuerreroCard>(this.url, {
      nombre: guerrero.nombre,
      descripcion: guerrero.descripcion,
      raza: guerrero.raza._id, // Enviamos solo el ID de la raza
      transformaciones: guerrero.transformaciones.map(trans => trans._id), // Enviamos solo los IDs de las transformaciones
      estado: guerrero.estado,
      foto: guerrero.foto
    });
  }

  // Actualizar un guerrero existente por su ID
  actualizarGuerrero(id: string, guerrero: GuerreroCard): Observable<GuerreroCard> {
    return this.http.put<GuerreroCard>(`${this.url}${id}`, {
      nombre: guerrero.nombre,
      descripcion: guerrero.descripcion,
      raza: guerrero.raza._id, // Enviamos solo el ID de la raza
      transformaciones: guerrero.transformaciones.map(trans => trans._id), // Enviamos solo los IDs de las transformaciones
      estado: guerrero.estado,
      foto: guerrero.foto
    });
  }
}