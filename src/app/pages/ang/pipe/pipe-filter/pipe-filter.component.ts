import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../../components/carousel/carousel.component';

@Component({
  selector: 'app-pipe-filter',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './pipe-filter.component.html',
  styleUrl: './pipe-filter.component.css'
})
export class PipeFilterComponent {
  images: carouselImage[] =  [
    {
      imageSrc: '/assets/img/ang/pipes/filterPipe/01.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/ang/pipes/filterPipe/02.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang/pipes/filterPipe/03.png',
      imageAlt: 'img 3'
    },
    {
      imageSrc: '/assets/img/ang/pipes/filterPipe/04.png',
      imageAlt: 'img 4'
    },
    {
      imageSrc: '/assets/img/ang/pipes/filterPipe/05.png',
      imageAlt: 'img 5'
    } 
  ]
  images2: carouselImage[] =  [
    {
      imageSrc: '/assets/img/ang/pipes/filterPipe/06.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/ang/pipes/filterPipe/07.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang/pipes/filterPipe/08.png',
      imageAlt: 'img 3'
    },
    {
      imageSrc: '/assets/img/ang/pipes/filterPipe/09.png',
      imageAlt: 'img 4'
    },
    {
      imageSrc: '/assets/img/ang/pipes/filterPipe/10.png',
      imageAlt: 'img 5'
    },
    {
      imageSrc: '/assets/img/ang/pipes/filterPipe/11.png',
      imageAlt: 'img 6'
    } 
  ]
}
