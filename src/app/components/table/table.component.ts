import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { SelectedTableService } from '../../selectedTable.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  table: string;
  tableData = [];
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  copyToClipboard(event) {
    const textArea = document.createElement('textarea');
    if (event.currentTarget.querySelector('pre').textContent === '❓❓❓' || event.target.classList.contains('clickToHide')) {
      return;
    }
    textArea.value = event.currentTarget.querySelector('pre').textContent;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  }

  showHideSecret(event) {
    if (event.target.classList.contains('clickToHide')) {
      event.currentTarget.querySelector('pre').classList.remove('show');
    }
    if (event.currentTarget.querySelector('pre').textContent === '❓❓❓') {
      event.currentTarget.querySelector('pre').classList.add('show');
    }
  }

  constructor(private selectedTableService: SelectedTableService) {

    this.selectedTableService.currentTable$.subscribe(table => {
      this.isLoading.next(true);
      this.table = table;
      console.log(table);
      this.selectedTableService.getData(table).subscribe(
        res => {
          console.log(res);
          this.tableData = res.Items;
          console.log(this.tableData);
          for (const item of this.tableData) {
            item.JsonString = JSON.parse(item.JsonString);
          }
          this.isLoading.next(false);
      });
    });
  }

  ngOnInit() {
    console.log(this.tableData);
  }

}
