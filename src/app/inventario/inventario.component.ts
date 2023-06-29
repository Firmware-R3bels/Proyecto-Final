import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {
  inventarioForm: FormGroup;
  secciones: any[] = [];

  constructor() {
    this.inventarioForm = new FormGroup({
      uip: new FormControl(''),
      nombre: new FormControl(''),    
      enBodega: new FormControl(''),
      zona: new FormControl('')
    });
  }

  agregarSeccion() {
    const nuevaSeccion = this.inventarioForm.value;
    this.secciones.push(nuevaSeccion);
    this.inventarioForm.reset();
  }

  eliminarSeccion(seccion: any) {
    const index = this.secciones.indexOf(seccion);
    if (index !== -1) {
      this.secciones.splice(index, 1);
    }
  }
}
