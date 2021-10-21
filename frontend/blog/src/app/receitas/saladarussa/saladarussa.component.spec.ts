import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladarussaComponent } from './saladarussa.component';

describe('SaladarussaComponent', () => {
  let component: SaladarussaComponent;
  let fixture: ComponentFixture<SaladarussaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaladarussaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladarussaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
