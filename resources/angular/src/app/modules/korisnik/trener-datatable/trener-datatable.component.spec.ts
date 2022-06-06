import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenerDatatableComponent } from './trener-datatable.component';

describe('TrenerDatatableComponent', () => {
  let component: TrenerDatatableComponent;
  let fixture: ComponentFixture<TrenerDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrenerDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrenerDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
