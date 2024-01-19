import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../../components/carousel/carousel.component';

@Component({
  selector: 'app-radio-button-in-template-dr-form',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './radio-button-in-template-dr-form.component.html',
  styleUrl: './radio-button-in-template-dr-form.component.css'
})
export class RadioButtonInTemplateDrFormComponent {
 images: carouselImage[] = [
  {
    imageSrc: '/assets/img/ang/forms/radioButtonTempDr/01.png',
    imageAlt: 'img 1'
  },
  {
    imageSrc: '/assets/img/ang/forms/radioButtonTempDr/02.png',
    imageAlt: 'img 2'
  },
  {
    imageSrc: '/assets/img/ang/forms/radioButtonTempDr/03.png',
    imageAlt: 'img 3'
  }
 ]
 images2: carouselImage[] = [
  {
    imageSrc: '/assets/img/ang/forms/radioButtonTempDr/04.png',
    imageAlt: 'img 1'
  },
  {
    imageSrc: '/assets/img/ang/forms/radioButtonTempDr/05.png',
    imageAlt: 'img 2'
  },
  {
    imageSrc: '/assets/img/ang/forms/radioButtonTempDr/06.png',
    imageAlt: 'img 3'
  }
 ]
}
