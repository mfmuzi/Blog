import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SopalegumesComponent } from './sopalegumes.component';

describe('SopalegumesComponent', () => {
  let component: SopalegumesComponent;
  let fixture: ComponentFixture<SopalegumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SopalegumesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SopalegumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
