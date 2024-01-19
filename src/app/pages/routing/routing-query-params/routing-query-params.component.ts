import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../components/carousel/carousel.component';

@Component({
  selector: 'app-routing-query-params',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './routing-query-params.component.html',
  styleUrl: './routing-query-params.component.css'
})
export class RoutingQueryParamsComponent {
  images2: carouselImage[] =  [
    {
      imageSrc: '/assets/img/ang/routing/1-1.png',
      imageAlt: 'img 1'
    },
    {
      imageSrc: '/assets/img/ang/routing/1-2.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang/routing/1-3.png',
      imageAlt: 'img 3'
    },
  ]
  images3: carouselImage[] =  [
    {
      imageSrc: '/assets/img/ang/routing/1-10.png',
      imageAlt: 'img 1'
    },
    {
      imageSrc: '/assets/img/ang/routing/1-11.png',
      imageAlt: 'img 2'
    },
  ]
}
