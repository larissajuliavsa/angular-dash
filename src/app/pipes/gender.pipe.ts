import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let gender = 'Male';

    if (value === 'f') {
      gender = 'Female'
    }

    return gender;
  }

}
