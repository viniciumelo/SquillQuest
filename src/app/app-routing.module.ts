import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./tela-inicial/tela-inicial.module').then( m => m.TelaInicialPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'manual',
    loadChildren: () => import('./manual/manual.module').then( m => m.ManualPageModule)
  },
  {
    path: 'cuide',
    loadChildren: () => import('./cuide/cuide.module').then( m => m.CuidePageModule)
  },
  {
    path: 'converse',
    loadChildren: () => import('./converse/converse.module').then( m => m.ConversePageModule)
  },
  {
    path: 'select-account',
    loadChildren: () => import('./select-account/select-account.module').then( m => m.SelectAccountPageModule)
  },
  {
    path: 'teacher-account',
    loadChildren: () => import('./teacher-account/teacher-account.module').then( m => m.TeacherAccountPageModule)
  },
  {
    path: 'school-account',
    loadChildren: () => import('./school-account/school-account.module').then( m => m.SchoolAccountPageModule)
  },
  {
    path: 'inclusao-page',
    loadChildren: () => import('./inclusao-page/inclusao-page.module').then( m => m.InclusaoPagePageModule)
  },
  {
    path: 'discriminacao-page',
    loadChildren: () => import('./discriminacao-page/discriminacao-page.module').then( m => m.DiscriminacaoPagePageModule)
  },
  {
    path: 'xenofobia-page',
    loadChildren: () => import('./xenofobia-page/xenofobia-page.module').then( m => m.XenofobiaPagePageModule)
  },
  {
    path: 'lgbtqiapage',
    loadChildren: () => import('./lgbtqiapage/lgbtqiapage.module').then( m => m.LGBTQIAPagePageModule)
  },
  {
    path: 'racismo-page',
    loadChildren: () => import('./racismo-page/racismo-page.module').then( m => m.RacismoPagePageModule)
  },
  {
    path: 'sexismo-page',
    loadChildren: () => import('./sexismo-page/sexismo-page.module').then( m => m.SexismoPagePageModule)
  }
  {
    path: 'tod',
    loadChildren: () => import('./tod/tod.module').then( m => m.TODPageModule)
  },
  {
    path: 'tdah',
    loadChildren: () => import('./tdah/tdah.module').then( m => m.TDAHPageModule)
  },
  {
    path: 'autismo',
    loadChildren: () => import('./autismo/autismo.module').then( m => m.AutismoPageModule)
  },

  


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
