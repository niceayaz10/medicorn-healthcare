import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
declare var bootstrap: any; // To use Bootstrap's JS utilities

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      countryCode: ['+91', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      country: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  async send() {
    if (this.form.invalid) {
      return;
    }

    const formData = this.form.value;
    const mobileWithCode = formData.countryCode + formData.mobile;

    try {
      const response = await emailjs.send(
        'service_l1egkey',
        'template_egwqxr9',
        {
          name: formData.name,
          email: formData.email,
          mobile: mobileWithCode,
          country: formData.country,
          message: formData.message,
        },
        'ZSvH_PonaqaU9jRZ9'
      );

      console.log('SUCCESS!', response.status, response.text);

      // Show the success modal
      const successModal = new bootstrap.Modal(document.getElementById('successModal'));
      successModal.show();

      this.form.reset();
    } catch (error) {
      console.error('FAILED...', error);
    }
  }
}
