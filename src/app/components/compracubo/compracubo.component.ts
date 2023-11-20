import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cubo } from 'src/app/models/cubo.model';
import { CubosService } from 'src/app/services/cubos.service';
import { ManageService } from 'src/app/services/manage.service';

@Component({
  selector: 'app-compracubo',
  templateUrl: './compracubo.component.html',
  styleUrls: ['./compracubo.component.css']
})
export class CompracuboComponent implements OnInit{

  public cubos!: Array<Cubo>
  public token: any
  public cubo!: Cubo

  constructor(
    private _manageService: ManageService,
    private _cubosService: CubosService,
    private _router: Router
  ){
    this.token = localStorage.getItem('token')
  }

  ngOnInit(): void {
    this._cubosService.getCubos().subscribe(response => {
      this.cubos = response
    })
  }

  insertarCompra(){
    this._manageService.insertarPedido(this.cubo.idCubo, this.token)
    .subscribe(response => {
      console.log(response)
      this._router.navigate(['usuariocompras'])
    }
    )
  }
}
