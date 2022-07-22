export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    fechanac: String;
    sobremi: String;

    constructor(nombre: String, apellido: String, img: String, fechanac: String, sobremi: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.fechanac = fechanac;
        this.sobremi = sobremi;
    }
} 