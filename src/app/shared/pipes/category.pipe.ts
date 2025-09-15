import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'category',
    standalone: true
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Carro': return 'directions_car';
      case 'Moto': return 'motorcycle';
    }
    return 'directions_car';
  }

}
