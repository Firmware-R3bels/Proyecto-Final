import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetBodegasComponent } from './widget-bodegas.component';

describe('WidgetBodegasComponent', () => {
  let component: WidgetBodegasComponent;
  let fixture: ComponentFixture<WidgetBodegasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetBodegasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetBodegasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
