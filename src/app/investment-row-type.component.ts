import { Component } from '@angular/core';
import {FieldType, FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'formly-field-investment-row',
  template: `
    <div class="row">
      <div class="col-md-4">
        <formly-field [field]="field.fieldGroup![0]"></formly-field>
      </div>
      <div class="col-md-4">
        <formly-field [field]="field.fieldGroup![1]"></formly-field>
      </div>
      <div class="col-md-4">
        <formly-field [field]="field.fieldGroup![2]"></formly-field>
      </div>
    </div>
  `,
})
export class InvestmentRowTypeComponent extends FieldType {


  constructor() {
    super();
    this.onPopulate = this.onPopulate.bind(this);
  }

  onPopulate(field: FormlyFieldConfig): void {

    field.fieldGroup = [
      {
        type: 'input',
        key: 'investmentName',
        props: {
          required: true,
        },
      },
      {
        type: 'input',
        key: 'investmentDate',
        props: {
          type: 'date',
        },
      },
      {
        type: 'input',
        key: 'stockIdentifier',
      },
    ];
  }


}
