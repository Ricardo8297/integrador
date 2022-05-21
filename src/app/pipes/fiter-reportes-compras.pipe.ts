import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fiterReportesCompras'
})
export class FiterReportesComprasPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg == '' || arg.length < 3) return value;
    const resultpost=[];
    for(const post of value){
        if(post.proovedor.toLowerCase().indexOf(arg.toLowerCase())> -1){
          resultpost.push(post);
        }
    }
    return resultpost;
  }

}
