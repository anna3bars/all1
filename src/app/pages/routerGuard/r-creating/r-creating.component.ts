import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../components/carousel/carousel.component';

@Component({
  selector: 'app-r-creating',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './r-creating.component.html',
  styleUrl: './r-creating.component.css'
})
export class RCreatingComponent {
  images: carouselImage[] =  [
    {
      imageSrc: '/assets/img/ang/routeGuard/01.png',
      imageAlt: 'img 1'
    },
    {
      imageSrc: '/assets/img/ang/routeGuard/02.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang/routeGuard/03.png',
      imageAlt: 'img 3'
    }
  ]
}
