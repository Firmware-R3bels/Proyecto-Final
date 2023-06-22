import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsSuperiorComponent } from './widgets-superior.component';

describe('WidgetsSuperiorComponent', () => {
  let component: WidgetsSuperiorComponent;
  let fixture: ComponentFixture<WidgetsSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsSuperiorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
