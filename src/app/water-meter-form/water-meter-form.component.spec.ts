import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterMeterFormComponent } from './water-meter-form.component';

describe('WaterMeterFormComponent', () => {
  let component: WaterMeterFormComponent;
  let fixture: ComponentFixture<WaterMeterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterMeterFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterMeterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
