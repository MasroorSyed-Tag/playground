import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import {GridRowComponent} from "./grid.row";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {
    name: 'name1',
    surname: 'surname1',
    investments: [
      {
        investmentName: 'project1',
        investmentDate: '',
        stockIdentifier: 1,
      },
      {
        investmentName: 'project2',
        investmentDate: '2004-06-20',
        stockIdentifier: 2,
      }
    ],
    // products: [
    //   {
    //     type: 'a',
    //     name: 'product a',
    //   },
    //   {
    //     type: 'b',
    //     name: 'product b',
    //   }
    // ],
  };

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      className: 'section-label',
      template: '<h5>Personal data</h5>',
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          className: 'col-md-6',
          props: {
            label: 'Name',
            required: true,
          },
        },
        {
          key: 'surname',
          type: 'input',
          className: 'col-md-6',
          props: {
            label: 'Surname',
            required: true,
          },
        },
      ],
    },
    {
      key: 'investments',
      type: 'grid',
      className: 'ag-theme-balham',
      props: {
        height: '200px',
      },
      fieldArray: {
        fieldGroup: [
          {
            type: 'investmentRow',
          },
        ],
      },
    }
    // {
    //   key: 'products',
    //   type: 'product-grid',
    //   props: {
    //     height: '200px',
    //   },
    //   fieldArray: {
    //     fieldGroup: [
    //       {
    //         type: 'input',
    //         key: 'type',
    //       },
    //       {
    //         type: 'input',
    //         key: 'name',
    //       },
    //     ],
    //   },
    // },
  ];

  setRow(): FormlyFieldConfig {
    return {
      type: GridRowComponent,
      props: {
      }
    };
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
}
