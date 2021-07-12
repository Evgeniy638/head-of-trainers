import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningSidePanelComponent } from './planning-side-panel.component';

describe('PlanningSidePanelComponent', () => {
  let component: PlanningSidePanelComponent;
  let fixture: ComponentFixture<PlanningSidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningSidePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
