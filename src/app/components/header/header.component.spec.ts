import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header.component';
import { HumanizePipe } from 'src/app/utils/humanize.pipe';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SelectedTableService } from '../../selectedTable.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service: SelectedTableService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        HeaderComponent,
        HumanizePipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a variable called table set to value of beta-QLMS_ClientApp on init', () => {
    component.ngOnInit();
    expect(component.table).toBe('beta-QLMS_ClientApp');
  });

  it('should trigger the updateObservable method on dropdown change', async(() => {
    fixture.whenStable().then(() => {
      spyOn(component, 'updateObservable');
      const select = fixture.debugElement.query(By.css('.dropdown')).nativeElement;
      select.value = select.options[3].value;
      select.dispatchEvent(new Event('change'));
      fixture.detectChanges();
      expect(component.updateObservable).toHaveBeenCalled();
      expect(component.updateObservable).toHaveBeenCalledWith('test-QLMS_ApiResource');
    });
  }));
});
