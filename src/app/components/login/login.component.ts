import { Component, OnInit } from '@angular/core';
import { Usuarioalt } from 'src/app/models/usuarioalt.model';
import { ManageService } from 'src/app/services/manage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  public usuario: Usuarioalt
  public token: any

  constructor(
    private _manageService: ManageService
  ){
    this.usuario = new Usuarioalt("","")
    this.token = localStorage.getItem('token')
  }

  loguear(){
    this._manageService.login(this.usuario).subscribe(response => {
      this.token = response.response
      localStorage.setItem('token', this.token)
    })
  }
}
