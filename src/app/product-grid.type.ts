import { Component, OnInit } from '@angular/core';
import { FieldArrayType, FormlyFieldConfig } from '@ngx-formly/core';
import {GridOptions, ColDef, FirstDataRenderedEvent} from 'ag-grid-community';
import { GridFormlyCellComponent } from './grid-formly-cell.component';

@Component({
  selector: 'formly-field-product-grid',
  template: `
    <div [ngStyle]="style">
      <button (click)="addProductRow()" class="btn btn-primary">Add Products</button>
      <ag-grid-angular style="width: 100%; height: 100%"
                       [gridOptions]="gridOptions"
                       [rowData]="model"
                       (firstDataRendered)="onFirstDataRendered($event)" >
      </ag-grid-angular>
    </div>
  `,
})
export class ProductGridTypeComponent extends FieldArrayType implements OnInit {
  gridOptions: GridOptions = {
    onGridReady: params => {
      this.gridOptions.api = params.api;
      this.gridOptions.columnApi = params.columnApi;
    },
  };
  style: any = {};

  constructor() {
    super();
  }

  ngOnInit() {
    const gridOptions: GridOptions = {
      rowHeight: 42,
      columnDefs: [
        {
          headerName: 'Product Type',
          field: 'type',
          width: 350,
          cellRenderer: GridFormlyCellComponent
        },
        {
          headerName: 'Product Name',
          field: 'name',
          width: 350,
          cellRenderer: GridFormlyCellComponent
        }
      ]
    };

    gridOptions.context = {
      parentField: this.field,
    };

    this.gridOptions = gridOptions;

  }

  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.sizeColumnsToFit();
  }

  addProductRow() {
    console.log(this.model);
    this.add();
    this.gridOptions.api?.setRowData(this.model);
  }
}
