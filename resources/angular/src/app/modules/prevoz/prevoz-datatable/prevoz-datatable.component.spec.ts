import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevozDatatableComponent } from './prevoz-datatable.component';

describe('PrevozDatatableComponent', () => {
  let component: PrevozDatatableComponent;
  let fixture: ComponentFixture<PrevozDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevozDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevozDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
