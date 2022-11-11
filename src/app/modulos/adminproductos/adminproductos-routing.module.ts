import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCategoriasComponent } from './categorias/crear-categorias/crear-categorias.component';
import { EditarCategoriasComponent } from './categorias/editar-categorias/editar-categorias.component';
import { EliminarCategoriasComponent } from './categorias/eliminar-categorias/eliminar-categorias.component';
import { ListarCategoriasComponent } from './categorias/listar-categorias/listar-categorias.component';
import { CrearVehiculosComponent } from './vehiculos/crear-vehiculos/crear-vehiculos.component';
import { EditarVehiculosComponent } from './vehiculos/editar-vehiculos/editar-vehiculos.component';
import { EliminarVehiculosComponent } from './vehiculos/eliminar-vehiculos/eliminar-vehiculos.component';
import { ListarVehiculosComponent } from './vehiculos/listar-vehiculos/listar-vehiculos.component';

const routes: Routes = [

  // rutas para vehiculos
  {
    path: 'crear-vehiculo',
    component: CrearVehiculosComponent,
  },
  {
    path: 'editar-vehiculo',
    component: EditarVehiculosComponent,
  },
  {
    path: 'eliminar-vehiculo',
    component: EliminarVehiculosComponent,
  },
  {
    path: 'listar-vehiculos',
    component: ListarVehiculosComponent,
  },
  // rutas para categorias
  {
    path: 'crear-categoria',
    component: CrearCategoriasComponent,
  },
  {
    path: 'editar-categoria/:id',
    component: EditarCategoriasComponent,
  },
  {
    path: 'eliminar-categoria',
    component: EliminarCategoriasComponent,
  },
  {
    path: 'listar-categorias',
    component: ListarCategoriasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminproductosRoutingModule {}