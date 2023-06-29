import { Component } from '@angular/core';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css']
})
export class BodegaComponent {
  bodegaCentralItems: string[] = ['Item 1', 'Item 2', 'Item 3']; // Agrega los elementos correspondientes
  bodegaAItems: string[] = ['Item 1', 'Item 2', 'Item 3']; // Agrega los elementos correspondientes
  bodegaBItems: string[] = ['Item 1', 'Item 2', 'Item 3']; // Agrega los elementos correspondientes
  bodegaCItems: string[] = ['Item 1', 'Item 2', 'Item 3']; // Agrega los elementos correspondientes
  bodegaDItems: string[] = ['Item 1', 'Item 2', 'Item 3']; // Agrega los elementos correspondientes

  showItems(bodegaId: string) {
    const itemList = document.getElementById(bodegaId + "-items");
    if (itemList) {
      itemList.style.display = "block";
      itemList.style.animation = "fade-in 0.5s";
    }
  }

  hideItems(bodegaId: string) {
    const itemList = document.getElementById(bodegaId + "-items");
    if (itemList) {
      itemList.style.animation = "fade-out 0.5s";
      setTimeout(() => {
        itemList.style.display = "none";
      }, 500);
    }
  }
  
}
