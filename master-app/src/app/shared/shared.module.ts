import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FooterComponent } from '@shared/components/footer/footer.component';

@NgModule({
    declarations: [
    FooterComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        IonicModule
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        FooterComponent,
        IonicModule
    ],
    providers: [],
})
export class SharedModule {}