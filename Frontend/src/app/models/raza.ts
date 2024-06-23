export class Raza {
    _id?: number;
    nombre: string;
    descripcion: string;
    planeta_origen: string;
    estado?: boolean;
  
    constructor(nombre: string, descripcion: string, planeta_origen: string, estado: boolean = true, _id?: number) {
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
