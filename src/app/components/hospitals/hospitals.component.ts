import { Component } from '@angular/core';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent {
  hospitals = [
    { name: 'Fortis', about: 'Fortis Healthcare Limited – an IHH Healthcare Berhad Company – is a leading integrated healthcare services provider in India. It is one of the largest healthcare organizations in the country with 28 healthcare facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (including JVs). Fortis is present in India, the United Arab Emirates (UAE), Nepal & Sri Lanka.', image: '../assets/hospital.jpeg', callLink: 'tel:+1234567890', whatsappLink: 'https://wa.me/8802397002' },
    { name: 'Apollo', about: 'Fortis Healthcare Limited – an IHH Healthcare Berhad Company – is a leading integrated healthcare services provider in India. It is one of the largest healthcare organizations in the country with 28 healthcare facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (including JVs). Fortis is present in India, the United Arab Emirates (UAE), Nepal & Sri Lanka. ', image: '../assets/hospital.jpeg', callLink: 'tel:+1234567890', whatsappLink: 'https://wa.me/8802397002' },
    { name: 'MAX', about: 'Fortis Healthcare Limited – an IHH Healthcare Berhad Company – is a leading integrated healthcare services provider in India. It is one of the largest healthcare organizations in the country with 28 healthcare facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (including JVs). Fortis is present in India, the United Arab Emirates (UAE), Nepal & Sri Lanka. ', image: '../assets/hospital.jpeg', callLink: 'tel:+1234567890', whatsappLink: 'https://wa.me/8802397002' },
    { name: 'Dr. John Doe', about: 'Fortis Healthcare Limited – an IHH Healthcare Berhad Company – is a leading integrated healthcare services provider in India. It is one of the largest healthcare organizations in the country with 28 healthcare facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (including JVs). Fortis is present in India, the United Arab Emirates (UAE), Nepal & Sri Lanka. ', image: '../assets/hospital.jpeg', callLink: 'tel:+1234567890', whatsappLink: 'https://wa.me/8802397002' },
    { name: 'Dr. Jane Smith', about: 'Fortis Healthcare Limited – an IHH Healthcare Berhad Company – is a leading integrated healthcare services provider in India. It is one of the largest healthcare organizations in the country with 28 healthcare facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (including JVs). Fortis is present in India, the United Arab Emirates (UAE), Nepal & Sri Lanka. ', image: '../assets/hospital.jpeg', callLink: 'tel:+1234567890', whatsappLink: 'https://wa.me/8802397002' },
    { name: 'Dr. Michael Ross', about: 'Fortis Healthcare Limited – an IHH Healthcare Berhad Company – is a leading integrated healthcare services provider in India. It is one of the largest healthcare organizations in the country with 28 healthcare facilities, 4,500+ operational beds (including O&M facilities), and over 400 diagnostics centers (including JVs). Fortis is present in India, the United Arab Emirates (UAE), Nepal & Sri Lanka. ', image: '../assets/hospital.jpeg', callLink: 'tel:+1234567890', whatsappLink: 'https://wa.me/8802397002' },
  ];

  // Group hospitals into chunks of 3 for display in the carousel
  chunkedHospitals: any[] = [];

  constructor() {
    this.chunkedHospitals = this.chunkArray(this.hospitals, 3);
  }

  // Helper function to chunk array into groups of a given size
  chunkArray(array: any[], size: number): any[] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
}
