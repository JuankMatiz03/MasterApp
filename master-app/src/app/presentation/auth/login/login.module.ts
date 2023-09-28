import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from '@present/auth/login/login-routing.module';
import { LoginComponent } from '@present/auth/login/login.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [ CommonModule, LoginRoutingModule, SharedModule ],
    exports: [
        LoginComponent
    ],
    providers: [],
})
export class LoginModule {}