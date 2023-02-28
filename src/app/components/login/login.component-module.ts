import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule
  ],
  declarations: [LoginComponent],
  providers: [],
  exports: [LoginComponent]
})
export class LoginComponentModule {
}
