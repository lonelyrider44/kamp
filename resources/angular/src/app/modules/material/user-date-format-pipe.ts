import { DatePipe } from "@angular/common";
import { PipeTransform } from "@angular/core";
import * as moment from 'moment';
import 'moment-timezone';


export class UserDateFormatPipe implements PipeTransform {

    transform(date: string | Date, timeFormat: string = ''): string {
      const defaultValues: any = {
        dateFormat: 'MM-dd-yyyy',
        language: 'en-US',
        timeZone: 'Europe/Belgrade' //change defaults accordingly
      };
      const timeZoneOffset = moment(new Date(date))
        .tz(defaultValues.timeZone)
        .format('Z');
      console.log('works', timeZoneOffset);
      const datePipe = new DatePipe(defaultValues.language);
      const dateFormat = timeFormat ? `${defaultValues.dateFormat}  ${timeFormat}` : defaultValues.dateFormat;
      return datePipe.transform(date, dateFormat, timeZoneOffset, defaultValues.language);
    }
  }