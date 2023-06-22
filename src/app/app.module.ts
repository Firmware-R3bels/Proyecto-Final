import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { WidgetsSuperiorComponent } from './home/widgets-superior/widgets-superior.component';
import { WidgetsMedioComponent } from './home/widgets-medio/widgets-medio.component';
import { UltimosMovimientosComponent } from './home/ultimos-movimientos/ultimos-movimientos.component';
import { WidgetBodegasComponent } from './home/widget-bodegas/widget-bodegas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    WidgetsSuperiorComponent,
    WidgetsMedioComponent,
    UltimosMovimientosComponent,
    WidgetBodegasComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
