import { Component, OnInit } from '@angular/core';
import { FieldArrayType, FormlyFieldConfig } from '@ngx-formly/core';
import { ColDef, FirstDataRenderedEvent, GridOptions } from 'ag-grid-community';
import { GridFormlyCellComponent } from "./grid-formly-cell.component";

@Component({
  selector: 'formly-field-grid',
  template: `
    <div [ngStyle]="style">
      <ag-grid-angular
        style="width: 100%; height: 100%"
        class="ag-theme-balham"
        [gridOptions]="gridOptions"
        [rowData]="model"
        (firstDataRendered)="onFirstDataRendered($event)">
      </ag-grid-angular>
    </div>
    <button (click)="addInvestment()">Add Investment</button>
  `,
})
export class GridTypeComponent extends FieldArrayType implements OnInit {
  gridOptions: GridOptions = {
    rowHeight: 42,
    columnDefs: [
      {
        headerName: 'Name of Investment',
        field: 'investmentName',
        sortable: true,
        width: 350,
      },
      {
        headerName: 'Date of Investment',
        field: 'investmentDate',
        sortable: true,
        width: 350,
      },
      {
        headerName: 'Stock Identifier',
        field: 'stockIdentifier',
      },
    ],
    onGridReady: params => {
      this.gridOptions.api = params.api;
      this.gridOptions.columnApi = params.columnApi;
    },
  };

  style: any = {
    width: '100%',
    height: '200px', // adjust as necessary
  };
  ngOnInit() {

    // map cell Renderer to Formly Component
    console.log(this.field)
    this.gridOptions.columnDefs?.forEach((column: ColDef) => {
      column.cellRenderer = GridFormlyCellComponent; // The name of the component in the ag-grid settings
    });

    // set context of the parent formly field
    this.gridOptions.context = {
      parentField: this.field,
    };
  }

  addInvestment() {
    this.add(undefined, {
      investmentName: '',
      investmentDate: new Date(),
      stockIdentifier: 2,
    });
    this.gridOptions.api?.setRowData(this.model);
  }

  onFirstDataRendered(params: FirstDataRenderedEvent) {
    params.api.sizeColumnsToFit();
  }
}
