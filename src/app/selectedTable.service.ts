import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SelectedTableService {

  private selectedTableSource = new BehaviorSubject<string>('beta_client_app');
  currentTable$ = this.selectedTableSource.asObservable();

  constructor(private http: HttpClient) { }

  public getData<T>(selectedTable: string): Observable<any> {
    const url = `https://pyok3j7ucb.execute-api.us-east-2.amazonaws.com/default/table?tableName=${selectedTable}`;
    return this.http.get(url);
  }

  public changeTable(table: string) {
    this.selectedTableSource.next(table);
  }

}
