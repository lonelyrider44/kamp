import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizioterapeutFormComponent } from './fizioterapeut-form.component';

describe('FizioterapeutFormComponent', () => {
  let component: FizioterapeutFormComponent;
  let fixture: ComponentFixture<FizioterapeutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizioterapeutFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FizioterapeutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
