import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../components/carousel/carousel.component';

@Component({
  selector: 'app-resolve',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './resolve.component.html',
  styleUrl: './resolve.component.css'
}) 
export class ResolveComponent {
  images: carouselImage[] =  [
    {
      imageSrc: '/assets/img/ang/routeGuard/resolve/01.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/ang/routeGuard/resolve/02.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang/routeGuard/resolve/03.png',
      imageAlt: 'img 3'
    },
    {
      imageSrc: '/assets/img/ang/routeGuard/resolve/04.png',
      imageAlt: 'img 4'
    } 
  ]
  images2: carouselImage[] =  [ 
    {
      imageSrc: '/assets/img/ang/routeGuard/resolve/05.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/ang/routeGuard/resolve/06.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang/routeGuard/resolve/07.png',
      imageAlt: 'img 3'
    }
  ]
}
