import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { HomeComponent } from './home/home.component';
import { PaocaseiroComponent } from './receitas/paocaseiro/paocaseiro.component';
import { TortamorangoComponent } from './receitas/tortamorango/tortamorango.component';
import { SaladarussaComponent } from './receitas/saladarussa/saladarussa.component';
import { CremepalmitoComponent } from './receitas/cremepalmito/cremepalmito.component';
import { PaorecheadoComponent } from './receitas/paorecheado/paorecheado.component';
import { SopalegumesComponent } from './receitas/sopalegumes/sopalegumes.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'receitas', component: ReceitasComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'paocaseiro', component: PaocaseiroComponent},
  {path: 'tortamorango', component: TortamorangoComponent},
  {path: 'saladarussa', component: SaladarussaComponent},
  {path: 'cremepalmito', component: CremepalmitoComponent},
  {path: 'paorecheado', component: PaorecheadoComponent},
  {path: 'sopalegumes', component: SopalegumesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
