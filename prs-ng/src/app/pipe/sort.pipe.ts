import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], column: string = "id", asc: boolean = true): any[] {

    function sortFn(a: any, b: any): number {
      let x = typeof a[column] == "number" ? a[column] : a[column].toString().toLowerCase();
      let y = b[column] == "number" ? b[column] : b[column].toString().toLowerCase();
      if (x === y) return 0;
      if (asc) {
        return (x < y) ? -1 : 1;
      } else {
        return (x < y) ? 1 : -1;
      }
    }

    return value.sort(sortFn);
  }

}
