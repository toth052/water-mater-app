import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-water-meter-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './water-meter-form.component.html',
  styleUrls: ['./water-meter-form.component.css']
})
export class WaterMeterFormComponent {
  waterMeterForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.waterMeterForm = this.fb.group({
      azonosito: ['', Validators.required],
      nev: ['', Validators.required],
      cim: ['', Validators.required],
      allas: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      datum: [new Date().toISOString().substring(0, 10), Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.waterMeterForm.valid) {
      console.log('Beküldött adatok:', this.waterMeterForm.value);
      alert('Vízóra állás sikeresen lejelentve!');
      this.waterMeterForm.reset();
      this.submitted = false;
    }
  }
}
