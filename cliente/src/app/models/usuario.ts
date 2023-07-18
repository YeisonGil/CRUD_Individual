export class Usuario{

    _id?: number;
    nombre: string;
    correo: string;
    contra: string;

    constructor(nombre:string, correo:string, contra:string){
        this.nombre = nombre;
        this.correo = correo;
        this.contra = contra;
    }
}