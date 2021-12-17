import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaorecheadoComponent } from './paorecheado.component';

describe('PaorecheadoComponent', () => {
  let component: PaorecheadoComponent;
  let fixture: ComponentFixture<PaorecheadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaorecheadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaorecheadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
