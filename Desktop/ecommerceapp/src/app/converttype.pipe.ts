import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converttype'
})
export class ConverttypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return 'card.price:value';
  }

}
