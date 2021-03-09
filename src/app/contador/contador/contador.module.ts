import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador.component';


@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [
        CommonModule,
    ]
})

export class ContadorModule {

}