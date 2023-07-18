import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarUsuariosComponent } from './components/mostrar-usuarios/mostrar-usuarios.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';

const routes: Routes = [
  { path:'', component: MostrarUsuariosComponent },
  { path:'crear-usuario', component: CrearUsuarioComponent},
  { path:'editar-producto/:id',component: CrearUsuarioComponent },
  { path:'**', pathMatch:'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
