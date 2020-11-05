import { Constantes } from './Constantes';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DateFormatConsultaPipe'
})
export class DateFormatConsultaPipePipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return super.transform(value, Constantes.DATE_CONSULTA_FMT);
  }

}
