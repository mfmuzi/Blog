import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CremepalmitoComponent } from './cremepalmito.component';

describe('CremepalmitoComponent', () => {
  let component: CremepalmitoComponent;
  let fixture: ComponentFixture<CremepalmitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CremepalmitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CremepalmitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
