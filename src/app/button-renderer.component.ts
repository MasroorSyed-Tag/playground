import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: 'button-renderer',
  template: `
    <button (click)="onClick()">Remove</button>
  `,
})
export class ButtonRendererComponent implements ICellRendererAngularComp {
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  onClick() {
    if (this.params.onClick instanceof Function) {
      this.params.onClick(this.params.node.rowIndex);
    }
  }
}
