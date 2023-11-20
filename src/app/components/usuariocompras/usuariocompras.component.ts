import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/services/compra.service';
import { Compra } from 'src/app/models/compra.model';

@Component({
  selector: 'app-usuariocompras',
  templateUrl: './usuariocompras.component.html',
  styleUrls: ['./usuariocompras.component.css']
})
export class UsuariocomprasComponent implements OnInit{

  public compras!: Array<Compra>
  public token: any

  constructor(
    private _compraService: CompraService,
  ){
    this.token = localStorage.getItem('token')
  }

  ngOnInit(): void {
    this._compraService.getCompras(this.token).subscribe(response => {
      this.compras = response
    })
  }
}
