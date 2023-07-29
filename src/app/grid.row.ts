import { Component, OnInit } from '@angular/core';
import {FieldArrayType, FieldType, FormlyFieldConfig} from '@ngx-formly/core';
import {ColDef, FirstDataRenderedEvent, GridOptions} from 'ag-grid-community';
import {GridFormlyCellComponent} from "./grid-formly-cell.component";

@Component({
  selector: 'formly-row-field-grid',
  template: `

  `,
})
export class GridRowComponent extends FieldType implements OnInit {
  ngOnInit(): void {
  }

}
