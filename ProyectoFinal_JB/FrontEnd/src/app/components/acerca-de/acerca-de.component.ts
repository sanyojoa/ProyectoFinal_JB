import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona[] = [];
  
  constructor(private personaS: PersonaService, private tokenService: TokenService) { }
  isLoged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLoged = true;
    }else{
      this.isLoged = false;
    }
  }

  cargarPersona():void{
    this.personaS.lista().subscribe(
      data =>{
        this.persona = data;
      }
    )
  }

  borrar(id?: number){
    if(id != undefined){
      this.personaS.delete(id).subscribe(
        data =>{
          this.cargarPersona();
        }, err =>{
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
