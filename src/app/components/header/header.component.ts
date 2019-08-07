import { Component, OnInit } from '@angular/core';

import { SelectedTableService } from '../../selectedTable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  table: string;

  updateObservable(selectedTable) {
    this.selectedTableService.changeTable(selectedTable);
  }

  constructor(private selectedTableService: SelectedTableService) {}

  ngOnInit() {
    this.selectedTableService.currentTable$.subscribe(table => this.table = table);
  }

}
