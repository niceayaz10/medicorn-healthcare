import { Component, OnInit } from '@angular/core';

interface Blog {
  title: string;
  description: string;
  date: string;
  author: string;
  imageUrl: string;
  category: string;  // Added category
}

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  searchTerm: string = '';  // Search term for filtering
  selectedCategory: string = '';  // Selected category for filtering

  categories: string[] = ['Health', 'Telemedicine', 'Robotics', 'Fitness'];
  blogs: Blog[] = [
    {
      title: 'How Telemedicine is Transforming Healthcare',
      description: 'Telemedicine is making healthcare more accessible, especially in rural and underserved areas. Learn how this innovation is changing the way patients interact with healthcare providers.',
      date: '2024-12-15',
      author: 'Dr. John Doe',
      imageUrl: 'assets/blog.jpg',
      category: 'Telemedicine'
    },
    {
      title: 'The Future of Medical Robotics',
      description: 'Medical robotics are revolutionizing surgery, with enhanced precision and reduced recovery times. Explore how robotic technologies are reshaping modern medicine.',
      date: '2024-12-10',
      author: 'Dr. Jane Smith',
      imageUrl: 'assets/blog.jpg',
      category: 'Robotics'
    },
    {
      title: '10 Tips for Healthy Living',
      description: 'Maintaining a healthy lifestyle doesn’t have to be complicated. Here are 10 simple tips to improve your health and well-being every day.',
      date: '2024-12-05',
      author: 'Nurse Mary',
      imageUrl: 'assets/blog.jpg',
      category: 'Health'
    },
    {
      title: '10 Tips for Healthy Living',
      description: 'Maintaining a healthy lifestyle doesn’t have to be complicated. Here are 10 simple tips to improve your health and well-being every day.',
      date: '2024-12-05',
      author: 'Nurse Mary',
      imageUrl: 'assets/blog.jpg',
      category: 'Health'
    },
    {
      title: 'Fitness and Nutrition Tips for a Stronger You',
      description: 'Explore how fitness and proper nutrition can transform your body and mind. Start your journey to a healthier lifestyle today.',
      date: '2024-12-01',
      author: 'Coach Alex',
      imageUrl: 'assets/blog.jpg',
      category: 'Fitness'
    },
    {
      title: 'Fitness and Nutrition Tips for a Stronger You',
      description: 'Explore how fitness and proper nutrition can transform your body and mind. Start your journey to a healthier lifestyle today.',
      date: '2024-12-01',
      author: 'Coach Alex',
      imageUrl: 'assets/blog.jpg',
      category: 'Fitness'
    },
  ];

  filteredBlogs: Blog[] = this.blogs;

  constructor() {}

  ngOnInit(): void {}

  filterBlogs(): void {
    this.filteredBlogs = this.blogs.filter(blog => {
      return (
        blog.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        (this.selectedCategory ? blog.category === this.selectedCategory : true)
      );
    });
  }
}
