import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const materialModule = [

]

@NgModule({
  imports: [
    CommonModule,
    materialModule
  ],
  exports: [
    materialModule
  ]
})
export class MaterialModule { }
