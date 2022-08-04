import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyecto: Proyecto[] = [];
  
  constructor(private proyectoS: ProyectoService, private tokenService: TokenService) { }
  isLoged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLoged = true;
    }else{
      this.isLoged = false;
    }
  }

  cargarProyecto():void{
    this.proyectoS.lista().subscribe(
      data =>{
        this.proyecto = data;
      }
    )
  }

  borrar(id?: number){
    if(id != undefined){
      this.proyectoS.delete(id).subscribe(
        data =>{
          this.cargarProyecto();
        }, err =>{
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
