import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEntradasComponent } from './components/lista-entradas/lista-entradas.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { NuevoShowComponent } from './components/nuevo-show/nuevo-show.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { SeatPicketComponent } from './components/seat-picket/seat-picket.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [

  { path:'', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'login', component: LoginUsuarioComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'seats', component: SeatPicketComponent },
  { path: 'nuevoShow', component: NuevoShowComponent },
  { path: 'listaEntradas', component: ListaEntradasComponent },
  { path: 'listaUsuarios', component: ListaUsuariosComponent },
  { path: 'updateUser', component: UpdateUserComponent},
  { path: 'nuevoUser', component: NuevoUsuarioComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
