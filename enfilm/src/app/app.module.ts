import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component'; 
import { HttpInterceptorService } from './services/http-interceptor.service';
import { Md5 } from 'ts-md5/dist/md5';


import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';




import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DialogoGeneralComponent } from './components/dialogo-general/dialogo-general.component';
import { SeatPicketComponent } from './components/seat-picket/seat-picket.component';
import { NuevoShowComponent } from './components/nuevo-show/nuevo-show.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { ListaEntradasComponent } from './components/lista-entradas/lista-entradas.component';
import { CambioPasswordComponent } from './components/cambio-password/cambio-password.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginUsuarioComponent,
    MoviesListComponent,
    ToolbarComponent,
    DialogoGeneralComponent,
    SeatPicketComponent,
    NuevoShowComponent,
    EntradaComponent,
    ListaEntradasComponent,
    CambioPasswordComponent,
    ListaUsuariosComponent,
    UpdateUserComponent,
    NuevoUsuarioComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatDividerModule,
    MatSnackBarModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatExpansionModule,
    MatButtonToggleModule,
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
