import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../../components/carousel/carousel.component';

@Component({
  selector: 'app-create-own-pipe',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './create-own-pipe.component.html',
  styleUrl: './create-own-pipe.component.css'
})
export class CreateOwnPipeComponent {
  images: carouselImage[] =  [
    {
      imageSrc: '/assets/img/ang/pipes/customPipe/01.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/ang/pipes/customPipe/02.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang/pipes/customPipe/03.png',
      imageAlt: 'img 3'
    }
  ]
}
