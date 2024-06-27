export class Transformacion {
    _id?: number;
    nombre: string;
    descripcion: string;

  
    constructor(nombre: string, descripcion: string, _id?: number) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this._id = _id;
    }
}
