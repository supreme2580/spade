import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'discover',
    loadChildren: () => import('./pages/discover/discover.module').then( m => m.DiscoverPageModule)
  },
  {
    path: 'bodybuild',
    loadChildren: () => import('./pages/bodybuild/bodybuild.module').then( m => m.BodybuildPageModule)
  },
  {
    path: 'relationshiptrait',
    loadChildren: () => import('./pages/relationshiptrait/relationshiptrait.module').then( m => m.RelationshiptraitPageModule)
  },
  {
    path: 'ethnicity',
    loadChildren: () => import('./pages/ethnicity/ethnicity.module').then( m => m.EthnicityPageModule)
  },
  {
    path: 'onboardingnav',
    loadChildren: () => import('./pages/onboardingnav/onboardingnav.module').then( m => m.OnboardingnavPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reg',
    loadChildren: () => import('./pages/reg/reg.module').then( m => m.RegPageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
