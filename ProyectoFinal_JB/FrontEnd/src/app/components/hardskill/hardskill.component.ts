import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hardskill',
  templateUrl: './hardskill.component.html',
  styleUrls: ['./hardskill.component.css']
})
export class HardskillComponent implements OnInit {
  skill: Skill[] = [];
  
  constructor(private skillS: SkillService, private tokenService: TokenService) { }
  isLoged = false;

  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLoged = true;
    }else{
      this.isLoged = false;
    }
  }

  cargarSkill():void{
    this.skillS.lista().subscribe(
      data =>{
        this.skill = data;
      }
    )
  }

  borrar(id?: number){
    if(id != undefined){
      this.skillS.delete(id).subscribe(
        data =>{
          this.cargarSkill();
        }, err =>{
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
