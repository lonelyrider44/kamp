import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmenaDatatableComponent } from './smena-datatable.component';

describe('SmenaDatatableComponent', () => {
  let component: SmenaDatatableComponent;
  let fixture: ComponentFixture<SmenaDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmenaDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmenaDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
