import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from '@present/auth/register/register-routing.module';
import { RegisterComponent } from '@present/auth/register/register.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms'; 


@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [ CommonModule, RegisterRoutingModule, SharedModule,FormsModule ],
    exports: [
        RegisterComponent
    ],
    providers: [],
})
export class RegisterModule {}