// src/app/models/guerrero-card.model.ts

export class GuerreroCard {
    _id?: string;
    nombre: string;
    descripcion: string;
    raza: Raza;
    transformaciones: Transformacion[];
    foto?: string;
    estado: string;
  
    constructor(
      nombre: string,
      descripcion: string,
      raza: Raza,
      transformaciones: Transformacion[],
      estado: string,
      foto?: string,
      _id?: string
    ) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.raza = raza;
      this.transformaciones = transformaciones;
      this.estado = estado;
      this.foto = foto;
      this._id = _id;
    }
  }
  
  export class Raza {
    _id?: string;
    nombre: string;
    descripcion: string;
    planeta_origen: string;
    estado?: boolean;
  
    constructor(
      nombre: string,
      descripcion: string,
      planeta_origen: string,
      estado: boolean = true,
      _id?: string
    ) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.planeta_origen = planeta_origen;
      this.estado = estado;
      this._id = _id;
    }
  
    getEstado(): string {
      return this.estado ? 'Activa' : 'Extinta';
    }
  }
  
  export class Transformacion {
    _id?: string;
    nombre: string;
    descripcion: string;
  
    constructor(nombre: string, descripcion: string, _id?: string) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this._id = _id;
    }
  }
  