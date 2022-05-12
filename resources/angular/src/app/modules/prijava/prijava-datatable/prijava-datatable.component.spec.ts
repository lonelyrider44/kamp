import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijavaDatatableComponent } from './prijava-datatable.component';

describe('PrijavaDatatableComponent', () => {
  let component: PrijavaDatatableComponent;
  let fixture: ComponentFixture<PrijavaDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrijavaDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrijavaDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
