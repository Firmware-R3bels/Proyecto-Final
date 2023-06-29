import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BodegaComponent } from './bodega/bodega.component';
import { MovimientosComponent } from './movimientos/movimientos.component';

const routes: Routes = [
  
  {path:'', component:HomeComponent},
  {path:'bodega', component:BodegaComponent},
  {path:'movimientos', component:MovimientosComponent}
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }