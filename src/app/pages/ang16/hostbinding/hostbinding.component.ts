import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../components/carousel/carousel.component';

@Component({
  selector: 'app-hostbinding',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './hostbinding.component.html',
  styleUrl: './hostbinding.component.css'
})
export class HostbindingComponent {
  images: carouselImage[] = [
    {
      imageSrc: '/assets/img/ang16/50hostbinding/06.png',
      imageAlt: 'img1'
    },
    {
      imageSrc: '/assets/img/ang16/50hostbinding/05.png',
      imageAlt: 'img2'
    },
    {
      imageSrc: '/assets/img/ang16/50hostbinding/04.png',
      imageAlt: 'img3'
    },
    {
      imageSrc: '/assets/img/ang16/50hostbinding/02.png',
      imageAlt: 'img4'
    },
    {
      imageSrc: '/assets/img/ang16/50hostbinding/03.png',
      imageAlt: 'img5'
    }
  ]
}
