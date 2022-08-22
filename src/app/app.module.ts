import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginService } from './services/login.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListPensionerDetailComponent } from './components/pensioner/list-pensioner-detail/list-pensioner-detail.component';
import { SearchPensionerComponent } from './components/pensioner/search-pensioner/search-pensioner.component';
import { ViewPensionerComponent } from './components/pensioner/view-pensioner/view-pensioner.component';
import { ViewPensionerDetailComponent } from './components/pensioner/view-pensioner-detail/view-pensioner-detail.component';
import { PensionerService } from './services/pensioner.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    PageNotFoundComponent,
    ListPensionerDetailComponent,
    SearchPensionerComponent,
    ViewPensionerComponent,
    ViewPensionerDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, NgbModule],
  providers: [
    LoginService,
    PensionerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
