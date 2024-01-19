import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../../components/carousel/carousel.component';

@Component({
  selector: 'app-nuances',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './nuances.component.html',
  styleUrl: './nuances.component.css'
})
export class NuancesComponent {
  images: carouselImage[] =  [
    {
      imageSrc: '/assets/img/js/localStorage/nuances/01.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/js/localStorage/nuances/03.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/js/localStorage/nuances/04.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/js/localStorage/nuances/05.png',
      imageAlt: 'img 2'
    }
  ]
  images2: carouselImage[] =  [
    {
      imageSrc: '/assets/img/js/localStorage/nuances/06.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/js/localStorage/nuances/07.png',
      imageAlt: 'img 2'
    }
  ]
  images3: carouselImage[] =  [
    {
      imageSrc: '/assets/img/js/localStorage/nuances/08.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/js/localStorage/nuances/09.png',
      imageAlt: 'img 2'
    }
  ]
}
