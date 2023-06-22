import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsMedioComponent } from './widgets-medio.component';

describe('WidgetsMedioComponent', () => {
  let component: WidgetsMedioComponent;
  let fixture: ComponentFixture<WidgetsMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsMedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
