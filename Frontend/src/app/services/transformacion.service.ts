import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Transformacion } from '../models/transformacion';

@Injectable({
  providedIn: 'root'
})
export class TransformacionService {
  url = 'http://localhost:4000/api/transformaciones/';

  constructor(private http: HttpClient) { }

  // Obtener todas las Transformaciones
  getTransformaciones(): Observable<Transformacion[]> {
    return this.http.get<Transformacion[]>(this.url).pipe(
      map((transformaciones: any[]) => {
        return transformaciones.map(transformaciones => new Transformacion(
          transformaciones.nombre,
          transformaciones.descripcion,
          transformaciones._id
        ));
      })
    );
  }

  // Obtener una Transformacion por su ID
  obtenerTransformacion(id: string): Observable<Transformacion> {
    return this.http.get<Transformacion>(`${this.url}${id}`);
  }

  // Eliminar una Transformacion por su ID (actualización de estado)
  eliminarTransformacion(id: string): Observable<any> {
    return this.http.put(`${this.url}${id}`, {});
  }

  // Guardar una nueva Transformacion
  guardarTransformacion(raza: Transformacion): Observable<Transformacion> {
    return this.http.post<Transformacion>(this.url, raza);
  }

  // Actualizar una Transformacion existente por su ID
  actualizarTransformacion(id: string, raza: Transformacion): Observable<Transformacion> {
    return this.http.put<Transformacion>(`${this.url}${id}`, raza);
  }
}
