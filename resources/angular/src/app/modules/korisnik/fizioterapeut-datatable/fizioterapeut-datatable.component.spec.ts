import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizioterapeutDatatableComponent } from './fizioterapeut-datatable.component';

describe('FizioterapeutDatatableComponent', () => {
  let component: FizioterapeutDatatableComponent;
  let fixture: ComponentFixture<FizioterapeutDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizioterapeutDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FizioterapeutDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
