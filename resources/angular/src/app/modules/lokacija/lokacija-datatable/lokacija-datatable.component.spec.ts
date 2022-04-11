import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LokacijaDatatableComponent } from './lokacija-datatable.component';

describe('LokacijaDatatableComponent', () => {
  let component: LokacijaDatatableComponent;
  let fixture: ComponentFixture<LokacijaDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LokacijaDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LokacijaDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
