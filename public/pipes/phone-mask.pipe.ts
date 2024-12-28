import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneMask'
})
export class PhoneMaskPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    const cleanedValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (cleanedValue.length === 10) {
      return `(${cleanedValue.substring(0, 2)}) ${cleanedValue.substring(2, 4)}-${cleanedValue.substring(6)}`;
    } else if (cleanedValue.length === 11) {
      return `(${cleanedValue.substring(0, 2)}) ${cleanedValue.substring(2, 5)}-${cleanedValue.substring(7)}`;
    }
    return value; 
  }
}
