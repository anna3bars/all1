import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../components/carousel/carousel.component';

@Component({
  selector: 'app-routing-id',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './routing-id.component.html',
  styleUrl: './routing-id.component.css'
})
export class RoutingIdComponent {
  images: carouselImage[] =  [
    {
      imageSrc: '/assets/img/ang/routing/01.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/ang/routing/02.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang/routing/03.png',
      imageAlt: 'img 3'
    },
    {
      imageSrc: '/assets/img/ang/routing/04.png',
      imageAlt: 'img 4'
    },
    {
      imageSrc: '/assets/img/ang/routing/05.png',
      imageAlt: 'img 5'
    },
    {
      imageSrc: '/assets/img/ang/routing/06.png',
      imageAlt: 'img 6'
    },
  ];
  id: boolean = false;
}
