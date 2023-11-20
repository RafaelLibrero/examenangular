import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { ManageService } from 'src/app/services/manage.service';

@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.component.html',
  styleUrls: ['./perfilusuario.component.css']
})
export class PerfilusuarioComponent implements OnInit{

  public usuario!: Usuario
  public token: any

  constructor(
    private _manageService: ManageService
  ){
    this.token = localStorage.getItem('token')
  }

  ngOnInit(): void {
    this._manageService.getPerfilUsuario(this.token).subscribe(response => {
      this.usuario = response
    })
  }
}
