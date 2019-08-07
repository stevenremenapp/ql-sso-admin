import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'humanize' })

export class HumanizePipe implements PipeTransform {

  transform(value: string): string {
    if (value === '') {
      return value;
    }

    switch (value) {
      case 'beta_client_app':
        return 'Beta Client App';
      case 'test_client_app':
        return 'Test Client App';
      case 'test_API_resource':
        return 'Test API Resource';
      case 'beta_API_resource':
        return 'Beta API Resource';
    }

    // value = value.replace(/([^A-Z])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][^A-Z])/g, '$1 $2');
    // value = value[0].toUpperCase() + value.slice(1);
    // return value;
  }
}
