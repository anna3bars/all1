import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../../components/carousel/carousel.component';

@Component({
  selector: 'app-ls-whatis',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './ls-whatis.component.html',
  styleUrl: './ls-whatis.component.css'
})
export class LsWhatisComponent {
  images: carouselImage[] =  [
    {
      imageSrc: '/assets/img/js/localStorage/02.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/js/localStorage/03.png',
      imageAlt: 'img 2'
    }
  ]
} 
