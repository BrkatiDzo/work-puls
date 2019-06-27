import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "filter",
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: any): any {
    if (!items || !searchTerm) {
      return items;
    }
    if (items == null) {
      return items;
    }
    return searchTerm
      ? items.filter(item => item.title.indexOf(searchTerm) !== -1)
      : items;
  }
}
