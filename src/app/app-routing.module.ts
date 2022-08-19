import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListPensionerDetailComponent } from './components/pensioner/list-pensioner-detail/list-pensioner-detail.component';
import { SearchPensionerComponent } from './components/pensioner/search-pensioner/search-pensioner.component';
import { ViewPensionerComponent } from './components/pensioner/view-pensioner/view-pensioner.component';
import { ViewPensionerDetailComponent } from './components/pensioner/view-pensioner-detail/view-pensioner-detail.component';
import { AdminAuthGuard } from './services/admin.auth.guard';
import { AuthGuard } from './services/auth.guard';

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
};

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },

  {
    path: 'pensioner',
    children: [
      {
        path: 'list',
        component: ListPensionerDetailComponent,
        pathMatch: 'full',
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'search',
        component: SearchPensionerComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
      },
      {
        path: 'view/:id',
        component: ViewPensionerDetailComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'process',
        component: ViewPensionerComponent,
        pathMatch: 'full',
        canActivate: [AuthGuard],
      },
    ],
  },

  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },

  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
