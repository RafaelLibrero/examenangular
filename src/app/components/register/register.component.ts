import { Component } from '@angular/core';
import { ManageService } from 'src/app/services/manage.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public usuario!: Usuario
  public token: any

  constructor(
    private _manageService: ManageService,
    private _router: Router
  ){
    this.usuario = new Usuario(0,"","","")
    this.token = localStorage.getItem('token')
  }

  registrar(){
    this._manageService.register(this.usuario).subscribe(response => {
      this._router.navigate(['login'])
    })
  }

}
