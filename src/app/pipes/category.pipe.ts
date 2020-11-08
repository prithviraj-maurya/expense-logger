import { Pipe, PipeTransform } from '@angular/core';
import { Expense } from '../model/expense';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: Expense[], type: string): any {
		if (type === 'All' || type === undefined) {
			return value;
		} else {
			return value.filter(val => val.type === type);
		}
	}

}
