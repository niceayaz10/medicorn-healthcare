import { Component, OnInit } from '@angular/core';

interface Testimonial {
  name: string;
  title: string;
  message: string;
  imageUrl: string;
  date: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials: Testimonial[] = [
    {
      name: 'John Doe',
      title: 'Patient',
      message: 'The healthcare services I received were exceptional. The doctors and nurses took excellent care of me, and the facilities were top-notch. I highly recommend this medical center.',
      imageUrl: 'assets/patient.png',
      date: '2024-12-10',
    },
    {
      name: 'Jane Smith',
      title: 'Patient',
      message: 'I had a telemedicine consultation, and it was so convenient. The doctor explained everything clearly, and I felt comfortable asking questions. The overall experience was great.',
      imageUrl: 'assets/patient.png',
      date: '2024-12-08',
    },
    {
      name: 'Maria Gonzalez',
      title: 'Patient',
      message: 'Thank you for the wonderful care. The team was attentive, and my treatment plan was clear. I appreciate how quickly everything was handled.',
      imageUrl: 'assets/patient.png',
      date: '2024-12-01',
    },
    {
      name: 'Robert Brown',
      title: 'Patient',
      message: 'The staff was friendly, and the medical procedures were explained step by step. I felt comfortable and confident throughout my visit.',
      imageUrl: 'assets/patient.png',
      date: '2024-11-25',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}