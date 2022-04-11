import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvestajDatatableComponent } from './izvestaj-datatable.component';

describe('IzvestajDatatableComponent', () => {
  let component: IzvestajDatatableComponent;
  let fixture: ComponentFixture<IzvestajDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzvestajDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzvestajDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
