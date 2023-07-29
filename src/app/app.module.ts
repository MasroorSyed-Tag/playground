import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { GridTypeComponent } from './grid.type';
import { GridFormlyCellComponent } from './grid-formly-cell.component';
import {BrowserModule} from "@angular/platform-browser";
import {ProductGridTypeComponent} from "./product-grid.type";
import {ButtonRendererComponent} from "./button-renderer.component";
import {GridRowComponent} from "./grid.row";
import {InvestmentRowTypeComponent} from "./investment-row-type.component";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    AgGridModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'grid',
          component: GridTypeComponent,
          defaultOptions: {
            props: {
              width: '100%',
              height: '400px',
            },
          },
        },
        {
          name: 'product-grid',
          component: ProductGridTypeComponent,
          defaultOptions: {
            props: {
              width: '100%',
              height: '400px',
            },
          },
        },
        { name: 'investmentRow', component: InvestmentRowTypeComponent },
      ],
    }),
  ],
  declarations: [AppComponent, GridTypeComponent, GridFormlyCellComponent, ProductGridTypeComponent,
    ButtonRendererComponent, GridRowComponent, InvestmentRowTypeComponent],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
