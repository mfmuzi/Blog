import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TortamorangoComponent } from './tortamorango.component';

describe('TortamorangoComponent', () => {
  let component: TortamorangoComponent;
  let fixture: ComponentFixture<TortamorangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TortamorangoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TortamorangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
