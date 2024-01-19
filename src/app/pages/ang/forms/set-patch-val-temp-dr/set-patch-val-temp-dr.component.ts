import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../../components/carousel/carousel.component';

@Component({
  selector: 'app-set-patch-val-temp-dr',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './set-patch-val-temp-dr.component.html',
  styleUrl: './set-patch-val-temp-dr.component.css'
})
export class SetPatchValTempDrComponent {
  images: carouselImage[] = [
    {
      imageSrc: '/assets/img/ang/forms/setPatchValuieDr/01.png',
      imageAlt: 'img 1'
    }, 
    {
      imageSrc: '/assets/img/ang/forms/setPatchValuieDr/02.png',
      imageAlt: 'img 2'
    },
    {
      imageSrc: '/assets/img/ang/forms/setPatchValuieDr/03.png',
      imageAlt: 'img 3'
    }
  ]
}
