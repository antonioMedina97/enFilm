import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { NuevoShowComponent } from './components/nuevo-show/nuevo-show.component';
import { SeatPicketComponent } from './components/seat-picket/seat-picket.component';

const routes: Routes = [

  { path:'', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'login', component: LoginUsuarioComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'seats', component: SeatPicketComponent },
  { path: 'nuevoShow', component: NuevoShowComponent },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
