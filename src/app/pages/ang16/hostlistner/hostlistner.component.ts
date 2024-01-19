import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../components/carousel/carousel.component';

@Component({
  selector: 'app-hostlistner',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './hostlistner.component.html',
  styleUrl: './hostlistner.component.css'
})
export class HostlistnerComponent {
  images: carouselImage[] = [
    { 
      imageSrc: '/assets/img/ang16/49hostlistner/05.png',
      imageAlt: 'img 1'
    },
    { 
      imageSrc: '/assets/img/ang16/49hostlistner/06.png',
      imageAlt: 'img 2'
    },
    { 
      imageSrc: '/assets/img/ang16/49hostlistner/07.png',
      imageAlt: 'img '
    }
  ]
}
