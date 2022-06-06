import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorDatatableComponent } from './administrator-datatable.component';

describe('AdministratorDatatableComponent', () => {
  let component: AdministratorDatatableComponent;
  let fixture: ComponentFixture<AdministratorDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
