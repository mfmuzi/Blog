import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PaocaseiroComponent } from './receitas/paocaseiro/paocaseiro.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { TortamorangoComponent } from './receitas/tortamorango/tortamorango.component';
import { SaladarussaComponent } from './receitas/saladarussa/saladarussa.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ReceitasComponent,
    ContactComponent,
    PaocaseiroComponent,
    HeroSearchComponent,
    TortamorangoComponent,
    SaladarussaComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,    
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
