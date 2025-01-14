import { Component } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {
  doctors = [
    { name: 'Dr. Stein Albert', specialty: 'Cardiology', image: '../assets/doctor.jpeg', callLink: 'tel:+1234567890', whatsappLink: 'https://wa.me/8802397002' },
    { name: 'Dr. Alexa Melvin', specialty: 'Dental', image: '../assets/doctor.jpeg', callLink: 'tel:+1234567890', whatsappLink: 'https://wa.me/8802397002' },
    { name: 'Dr. Rebecca Steffany', specialty: 'General Health', image: '../assets/doctor.jpeg', callLink: 'tel:+1234567890', whatsappLink: 'https://wa.me/8802397002' },
    { name: 'Dr. John Doe', specialty: 'Orthopedics', image: '../assets/doctor.jpeg', callLink: 'tel:+1234567890', whatsappLink: 'https://wa.me/8802397002' },
    { name: 'Dr. Jane Smith', specialty: 'Neurology', image: '../assets/doctor.jpeg', callLink: 'tel:+1234567890', whatsappLink: 'https://wa.me/8802397002' },
    { name: 'Dr. Michael Ross', specialty: 'Pediatrics', image: '../assets/doctor.jpeg', callLink: 'tel:+1234567890', whatsappLink: 'https://wa.me/8802397002' },
  ];

  // Group doctors into chunks of 3 for display in the carousel
  chunkedDoctors: any[] = [];

  constructor() {
    this.chunkedDoctors = this.chunkArray(this.doctors, 3);
  }

  // Helper function to chunk array into groups of a given size
  chunkArray(array: any[], size: number): any[] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  // Latest News data
  latestNews = [
    {
      category: 'Covid19',
      title: 'List of Countries without Coronavirus case',
      image: '../assets/img/blog/blog_1.jpg',
      detailsLink: 'blog-details.html',
      author: 'Roger Adams',
      authorImage: '../assets/img/person/person_1.jpg',
      date: '1 week ago',
    },
    {
      category: 'Covid19',
      title: 'Recovery Room: News beyond the pandemic',
      image: '../assets/img/blog/blog_2.jpg',
      detailsLink: 'blog-details.html',
      author: 'Roger Adams',
      authorImage: '../assets/img/person/person_1.jpg',
      date: '4 weeks ago',
    },
    {
      category: 'Covid19',
      title: 'What is the impact of eating too much sugar?',
      image: '../assets/img/blog/blog_3.jpg',
      detailsLink: 'blog-details.html',
      author: 'Diego Simmons',
      authorImage: '../assets/img/person/person_2.jpg',
      date: '2 months ago',
    },
  ];
}
