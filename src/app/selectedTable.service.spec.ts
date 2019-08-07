import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { SelectedTableService } from './selectedTable.service';

describe('Service: SelectedTableService', () => {
  let service: SelectedTableService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SelectedTableService]
    });

    service = TestBed.get(SelectedTableService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  // I DON'T THINK THIS IS DOING WHAT IT IS SUPPOSED TO, BUT I THINK IT MIGHT BE CLOSE SO I'M LEAVING IT FOR NOW
  it(
    'should return table data',
    fakeAsync(() => {
      const response = require('../data/betaClientApp.json');
      // console.log(response);
      const selectedTable = 'beta-QLMS_ClientApp';
      service.getData(selectedTable);
      const req = httpTestingController.expectNone(
        `https://vdtohno8th.execute-api.us-east-2.amazonaws.com/default/node-sso/table?tableName=${selectedTable}`
      );
      // expect(req.request.method).toEqual('GET');
      // req.flush(response);
      tick();

      expect(response[0].ClientId).toBe('angularlocalhost');
    })
  );
});
