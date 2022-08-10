export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    fechanac: string;
    sobremi: string;

    constructor(nombre: string, apellido: string, img: string, fechanac: string, sobremi: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.fechanac = fechanac;
        this.sobremi = sobremi;
    }
} 