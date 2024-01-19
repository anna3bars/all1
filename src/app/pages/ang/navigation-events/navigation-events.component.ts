import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../components/carousel/carousel.component';

@Component({
  selector: 'app-navigation-events',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './navigation-events.component.html',
  styleUrl: './navigation-events.component.css'
})
export class NavigationEventsComponent {
  images: carouselImage[] =  [
    {
      imageSrc: '/assets/img/ang/navigationEvents/02.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/ang/navigationEvents/03.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang/navigationEvents/04.png',
      imageAlt: 'img 3'
    }
  ]
  images2: carouselImage[] =  [
    {
      imageSrc: '/assets/img/ang/navigationEvents/001.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/ang/navigationEvents/002.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang/navigationEvents/003.png',
      imageAlt: 'img 3'
    }
  ]
}
