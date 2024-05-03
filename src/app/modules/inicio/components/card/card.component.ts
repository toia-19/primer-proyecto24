import { Component } from '@angular/core';
// IMPORTAMOS LA INTERFAZ PARA ANIMALES
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // PROPIEDAD PÚBLICA -> TIPO ARRAY
  public info: Animal[];

  // INICIALIZAR LA PROPIEDAD INFO
  constructor(){
    this.info = [
      {
        id: "",
        nombre: "Chanchito",
        raza: "Cerdo",
        edad: 5,
        imagen: "https://i1.sndcdn.com/artworks-000190784980-i4qoly-t500x500.jpg",
        alt: "Imagen de un chanchito"
      },
      {
        id: "",
        nombre: "Caballo",
        raza: "Caballo",
        edad: 7,
        imagen: "https://concepto.de/wp-content/uploads/2021/07/caballos-e1626738224231.jpg",
        alt: "Imagen de un caballo"
      },
      {
        id: "",
        nombre: "Perro",
        raza: "Border Collie",
        edad: 2,
        imagen: "https://belleza-estetica.com.ar/wp-content/uploads/2024/02/cuales_son_los_cuidados_de_un_border_collie_52029_orig.jpg",
        alt: "Imagen de un perro"
      }
    ]
  }
}
