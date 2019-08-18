import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalComponent } from './locais/local/local.component';


const routes: Routes = [
  {path:'local', component: LocalComponent, data: {title: 'Tela de locais'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

