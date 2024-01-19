import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../components/carousel/carousel.component';

@Component({
  selector: 'app-can-deactivate',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './can-deactivate.component.html',
  styleUrl: './can-deactivate.component.css'
})
export class CanDeactivateComponent {
  images: carouselImage[] =  [
    {
      imageSrc: '/assets/img/ang/routeGuard/05.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/ang/routeGuard/06.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang/routeGuard/07.png',
      imageAlt: 'img 3'
    },
    {
      imageSrc: '/assets/img/ang/routeGuard/08.png',
      imageAlt: 'img 4'
    } 
  ] 
}
