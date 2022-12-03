import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent, children: [
    {path: '', loadChildren: () => import('./views/home/home-page/home-page.module').then(m => m.HomePageModule)},
    {path: 'loginAdmin', loadChildren: () => import('./views/home/sign-in-admin/sign-in-admin.module').then(m => m.SignInAdminModule)},
    {path: 'login', loadChildren: () => import('./views/home/sign-in-user/sign-in-user.module').then(m => m.SignInUserModule)},
  ]},
  {path: 'admin', component: AdminLayoutComponent},
  {path: 'user', component: UserLayoutComponent, children: [
    {path: 'create', loadChildren: () => import('./views/user/create-portfolio/create-portfolio.module').then(m => m.CreatePortfolioModule)},
    {path: 'show', loadChildren: () => import('./views/user/show-portfolio/show-portfolio.module').then(m => m.ShowPortfolioModule)},
    {path: 'register', loadChildren: () => import('./views/user/sign-up/sign-up.module').then(m => m.SignUpModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
