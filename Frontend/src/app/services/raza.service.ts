import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Raza } from '../models/raza';

@Injectable({
  providedIn: 'root'
})
export class RazaService {
  url = 'http://localhost:4000/api/razas/';

  constructor(private http: HttpClient) { }

  // Obtener todas las razas
  getRazas(): Observable<Raza[]> {
    return this.http.get<Raza[]>(this.url).pipe(
      map((razas: any[]) => {
        return razas.map(raza => new Raza(
          raza.nombre,
          raza.descripcion,
          raza.planeta_origen,
          raza.estado,
          raza._id
        ));
      })
    );
  }

  // Obtener una raza por su ID
  obtenerRaza(id: string): Observable<Raza> {
    return this.http.get<Raza>(`${this.url}${id}`);
  }

  // Eliminar una raza por su ID (actualización de estado)
  eliminarRaza(id: string): Observable<any> {
    return this.http.put(`${this.url}${id}`, { estado: false });
  }

  // Guardar una nueva raza
  guardarRaza(raza: Raza): Observable<Raza> {
    return this.http.post<Raza>(this.url, raza);
  }

  // Actualizar una raza existente por su ID
  actualizarRaza(id: string, raza: Raza): Observable<Raza> {
    return this.http.put<Raza>(`${this.url}${id}`, raza);
  }
}
