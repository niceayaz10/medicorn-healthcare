import { Component , ElementRef, Renderer2, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations: [
    trigger('zoomIn', [
      state('hidden', style({ opacity: 0, transform: 'scale(0.8)' })),
      state('visible', style({ opacity: 1, transform: 'scale(1)' })),
      transition('hidden => visible', [
        animate(
          '1s ease-in-out'
        ),
      ]),
    ]),
  ],
})
export class AboutUsComponent {
  isVisible = false; // Controls animation state

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true; // Trigger animation
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the component is visible
    );

    observer.observe(this.el.nativeElement); // Observe the component
  }
}
