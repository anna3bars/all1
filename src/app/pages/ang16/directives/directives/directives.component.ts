import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../../components/carousel/carousel.component';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  images: carouselImage[] = [
    {
      imageSrc: '/assets/img/ang16/19directives/tel/01.jpeg',
      imageAlt: 'img 1'
    },
    {
      imageSrc: '/assets/img/ang16/19directives/tel/02.jpeg',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang16/19directives/tel/03.jpeg',
      imageAlt: 'img 3'
    },
    {
      imageSrc: '/assets/img/ang16/19directives/tel/04.jpeg',
      imageAlt: 'img 4'
    },
    {
      imageSrc: '/assets/img/ang16/19directives/tel/05.jpeg',
      imageAlt: 'img 5'
    },
    {
      imageSrc: '/assets/img/ang16/19directives/tel/06.jpeg',
      imageAlt: 'img 6'
    },
    {
      imageSrc: '/assets/img/ang16/19directives/tel/07.jpeg',
      imageAlt: 'img 7'
    },
    {
      imageSrc: '/assets/img/ang16/19directives/tel/08.jpeg',
      imageAlt: 'img 8'
    }
  ]
}
