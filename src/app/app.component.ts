import { Component } from '@angular/core';
import { WaterMeterFormComponent } from './water-meter-form/water-meter-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WaterMeterFormComponent],
  template: `<app-water-meter-form></app-water-meter-form>`,
})
export class AppComponent {}
