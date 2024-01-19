import { Component } from '@angular/core';
import { CarouselComponent, carouselImage } from '../../../../components/carousel/carousel.component';

@Component({
  selector: 'app-form-control-group-in-template-dr',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './form-control-group-in-template-dr.component.html',
  styleUrl: './form-control-group-in-template-dr.component.css'
})
export class FormControlGroupInTemplateDrComponent {
 images: carouselImage[] = [
  {
    imageSrc: '/assets/img/ang/forms/formGoupDrTemp/01.png',
    imageAlt: 'img 1'
  },
  {
    imageSrc: '/assets/img/ang/forms/formGoupDrTemp/02.png',
    imageAlt: 'img 2'
  },
  {
    imageSrc: '/assets/img/ang/forms/formGoupDrTemp/03.png',
    imageAlt: 'img 3'
  }
 ]
}
