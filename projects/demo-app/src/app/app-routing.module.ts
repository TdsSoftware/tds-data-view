import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { ClientesModule } from './clientes/clientes.module';
import { UsuariosModule } from './usuarios/usuarios.module';

const routes: Routes = [
  {
    path: 'funcionarios',
    loadChildren: () => FuncionariosModule,
  },
  {
    path: 'clientes',
    loadChildren: () => ClientesModule,
  },
  {
    path: 'usuarios',
    loadChildren: () => UsuariosModule,
  },
  {
    path: '**',
    redirectTo: '/funcionarios',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
