import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { LoginComponentModule } from './components/login/login.component-module';
import { HomeComponentModule } from './components/home/home.component-module';
import { AuthServiceModule } from './services/auth.service-module';
import { LoggedInComponentModule } from './components/logged-in/logged-in.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'login', component: LoginComponent }, { path: '', component: HomeComponent }, { path: 'logged-in', component: LoggedInComponent }]), LoginComponentModule, HomeComponentModule, AuthServiceModule, LoggedInComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
