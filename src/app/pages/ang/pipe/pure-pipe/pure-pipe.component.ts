import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../../components/carousel/carousel.component';

@Component({
  selector: 'app-pure-pipe',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './pure-pipe.component.html',
  styleUrl: './pure-pipe.component.css'
})
export class PurePipeComponent {
  images: carouselImage[] =  [
    {
      imageSrc: '/assets/img/ang/pipes/purePipe/01.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/ang/pipes/purePipe/02.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang/pipes/purePipe/03.png',
      imageAlt: 'img 3'
    },
    {
      imageSrc: '/assets/img/ang/pipes/purePipe/04.png',
      imageAlt: 'img 4'
    }
  ]
  images2: carouselImage[] =  [
    {
      imageSrc: '/assets/img/ang/pipes/purePipe/05.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/ang/pipes/purePipe/06.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang/pipes/purePipe/07.png',
      imageAlt: 'img 3'
    },
    {
      imageSrc: '/assets/img/ang/pipes/purePipe/08.png',
      imageAlt: 'img 4'
    }
  ]
  images3: carouselImage[] =  [
    {
      imageSrc: '/assets/img/ang/pipes/purePipe/10.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/ang/pipes/purePipe/11.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang/pipes/purePipe/12.png',
      imageAlt: 'img 3'
    },
    {
      imageSrc: '/assets/img/ang/pipes/purePipe/13.png',
      imageAlt: 'img 4'
    },
    {
      imageSrc: '/assets/img/ang/pipes/purePipe/14.png',
      imageAlt: 'img 4'
    }
  ]
}
