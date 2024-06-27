// src/app/services/guerrero.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GuerreroCard } from '../models/guerrero-card';

@Injectable({
  providedIn: 'root'
})
export class GuerreroCardService {
  private apiUrl = 'http://localhost:4000/api/guerreros/';

  constructor(private http: HttpClient) {}

  getGuerreros(): Observable<GuerreroCard[]> {
    return this.http.get<GuerreroCard[]>(this.apiUrl);
  }
}
