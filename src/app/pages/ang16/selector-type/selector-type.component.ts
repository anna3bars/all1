import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../components/carousel/carousel.component';

@Component({
  selector: 'app-selector-type',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './selector-type.component.html',
  styleUrl: './selector-type.component.css'
})
export class SelectorTypeComponent {
  images: carouselImage[] = [
    {
      imageSrc: '/assets/img/ang16/13selectorType/001.png',
      imageAlt: 'img 1'
    },
    {
      imageSrc: '/assets/img/ang16/13selectorType/02.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang16/13selectorType/03.png',
      imageAlt: 'img 3'
    },
    {
      imageSrc: '/assets/img/ang16/13selectorType/04.png',
      imageAlt: 'img 4'
    },
    {
      imageSrc: '/assets/img/ang16/13selectorType/05.png',
      imageAlt: 'img 5'
    },
    {
      imageSrc: '/assets/img/ang16/13selectorType/06.png',
      imageAlt: 'img 6'
    },
    {
      imageSrc: '/assets/img/ang16/13selectorType/07.png',
      imageAlt: 'img 7'
    }
  ]
}
