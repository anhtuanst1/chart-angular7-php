import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInputDataComponent } from './table-input-data.component';

describe('TableInputDataComponent', () => {
  let component: TableInputDataComponent;
  let fixture: ComponentFixture<TableInputDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableInputDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInputDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
