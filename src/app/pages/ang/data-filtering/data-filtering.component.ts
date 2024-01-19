import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../components/carousel/carousel.component';

@Component({
  selector: 'app-data-filtering',
  standalone: true,
  imports: [CommonModule, NgClass, CarouselComponent],
  templateUrl: './data-filtering.component.html',
  styleUrl: './data-filtering.component.css'
})
export class DataFilteringComponent {
  images: carouselImage[] = [
    {
      imageSrc: '/assets/img/ang/filteringData/01.png',
      imageAlt: 'img 1',
    },
    {
      imageSrc: '/assets/img/ang/filteringData/02.png',
      imageAlt: 'img 2',
    }, 
    {
      imageSrc: '/assets/img/ang/filteringData/03.png',
      imageAlt: 'img 3',
    }, 
    {
      imageSrc: '/assets/img/ang/filteringData/04.png',
      imageAlt: 'img 4',
    }, 
    {
      imageSrc: '/assets/img/ang/filteringData/05.png',
      imageAlt: 'img 5',
    }
  ]
}
