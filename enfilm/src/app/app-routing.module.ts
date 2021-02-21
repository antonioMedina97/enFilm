import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';

const routes: Routes = [

  { path:'', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginUsuarioComponent },
  { path: 'index', component: MoviesListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
