import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../../components/carousel/carousel.component';

@Component({
  selector: 'app-lc-event',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './lc-event.component.html',
  styleUrl: './lc-event.component.css'
})
export class LcEventComponent {
  images: carouselImage[] =  [
    {
      imageSrc: '/assets/img/js/localStorage/event/01.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/js/localStorage/event/02.png',
      imageAlt: 'img 2'
    }
  ]
  images2: carouselImage[] =  [
    {
      imageSrc: '/assets/img/js/localStorage/event/03.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/js/localStorage/event/04.png',
      imageAlt: 'img 2'
    }
  ]
}
