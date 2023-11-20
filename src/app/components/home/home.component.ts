import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo.model';
import { CubosService } from 'src/app/services/cubos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public cubos!: Array<Cubo>

  constructor(private _cubosService: CubosService){}

  ngOnInit(): void {
    this._cubosService.getCubos().subscribe(response => {
      this.cubos = response
    })
  }

}
