import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../components/carousel/carousel.component';

@Component({
  selector: 'app-content-child',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './content-child.component.html',
  styleUrl: './content-child.component.css'
})
export class ContentChildComponent {
  images: carouselImage[] = [
    {
      imageSrc: '/assets/img/ang16/36contentChild/02.png',
      imageAlt: 'img 1'
    },
    {
      imageSrc: '/assets/img/ang16/36contentChild/03.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang16/36contentChild/04.png',
      imageAlt: 'img 3'
    }
  ]
}
