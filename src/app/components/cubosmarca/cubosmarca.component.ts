import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo.model';
import { CubosService } from 'src/app/services/cubos.service';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-cubosmarca',
  templateUrl: './cubosmarca.component.html',
  styleUrls: ['./cubosmarca.component.css']
})
export class CubosmarcaComponent implements OnInit{

  public cubos!: Array<Cubo>
  public marca!: string

  constructor(
    private _cubosService: CubosService,
    private _activeRoute: ActivatedRoute
    ){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe(parametros => {
      this.marca = parametros['marca']

      this._cubosService.getCubosByMarca(this.marca).subscribe(response =>  {
        this.cubos = response
      })
    })
  }
}
