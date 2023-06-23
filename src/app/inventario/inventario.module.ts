import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InventarioComponent} from './inventario.component';

@NgModule({
  declarations: [InventarioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [InventarioComponent]
})
export class InventarioModule { }
