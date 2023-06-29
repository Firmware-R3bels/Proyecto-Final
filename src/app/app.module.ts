import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { WidgetsSuperiorComponent } from './home/widgets-superior/widgets-superior.component';
import { UltimosMovimientosComponent } from './home/ultimos-movimientos/ultimos-movimientos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InventarioComponent } from './inventario/inventario.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    WidgetsSuperiorComponent,
    UltimosMovimientosComponent,
    InventarioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
