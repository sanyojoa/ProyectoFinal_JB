export class Skill {
    id?: number;
    nombreS: string;
    imgS: string;
    porcentajeS: string;

    constructor(nombreS: string, imgS: string, porcentajeS: string){
        this.nombreS = nombreS;
        this.imgS = imgS;
        this.porcentajeS = porcentajeS;
    }
}
