import { NativeDateAdapter } from "@angular/material/core";
import { UserDateFormatPipe } from "./user-date-format-pipe";
import { format as formatFns } from 'date-fns';

export const MAT_CUSTOM_DATE_FORMATS = {
  parse: {
      dateInput: 'dd-MM-yyyy',
  },
  display: {
      dateInput: 'dd-MM-yyyy',
      monthYearLabel: { year: 'numeric', month: 'short' },
      dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
      monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};
export class CustomDateAdapter extends NativeDateAdapter {
    // format(date: Date): string {
    //     const pipe = new UserDateFormatPipe();
    //     return pipe.transform(date);
    //   }

      public createDate(year: number, month: number, date: number): Date {
        const localDate = super.createDate(year, month, date);
        const offset = localDate.getTimezoneOffset() * 60000;
        return new Date(localDate.getTime() - offset); // utcDate
    }

    public format(date: Date, displayFormat: any): string {
        if (displayFormat !== MAT_CUSTOM_DATE_FORMATS.display.dateInput) {
            return super.format(date, displayFormat);
        } else {
            return formatFns(date, MAT_CUSTOM_DATE_FORMATS.display.dateInput);
        }
    }
}
