import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { Foto } from '../foto.model';


@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})

export class CamaraComponent  implements OnInit {

  constructor(private foto: FotoServiceService) { }
  ngOnInit() {}

  fotos: Foto[] = this.foto.fotos;

  tomarfoto(){
    this.foto.addNewToGallery()
  }
}
