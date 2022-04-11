import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UplataDatatableComponent } from './uplata-datatable.component';

describe('UplataDatatableComponent', () => {
  let component: UplataDatatableComponent;
  let fixture: ComponentFixture<UplataDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UplataDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UplataDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
