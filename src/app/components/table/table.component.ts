import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() columnArray:string[]= [];
  @Input() gridArray:any[]= [];

  @Output () onEdit = new EventEmitter<any>();
  @Output () onDelete = new EventEmitter<any>();

  edit(item: any) {
    this.onEdit.emit(item);
  }
  deleteRecord(item: any) {
    this.onDelete.emit(item);
  }

}
