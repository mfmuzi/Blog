import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaocaseiroComponent } from './paocaseiro.component';

describe('PaocaseiroComponent', () => {
  let component: PaocaseiroComponent;
  let fixture: ComponentFixture<PaocaseiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaocaseiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaocaseiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
