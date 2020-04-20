import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceDataTableComponent } from './finance-data-table.component';

describe('FinanceDataTableComponent', () => {
  let component: FinanceDataTableComponent;
  let fixture: ComponentFixture<FinanceDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
