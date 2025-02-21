import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mesa-1',
    loadChildren: () => import('./mesa-1/mesa-1.module').then( m => m.Mesa1PageModule)
  },
  {
    path: 'mesa-2',
    loadChildren: () => import('./mesa-2/mesa-2.module').then( m => m.Mesa2PageModule)
  },
  {
    path: 'mesa-3',
    loadChildren: () => import('./mesa-3/mesa-3.module').then( m => m.Mesa3PageModule)
  },
  {
    path: 'mesa-4',
    loadChildren: () => import('./mesa-4/mesa-4.module').then( m => m.Mesa4PageModule)
  },
  {
    path: 'mesas',
    loadChildren: () => import('./mesas/mesas.module').then( m => m.MesasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
