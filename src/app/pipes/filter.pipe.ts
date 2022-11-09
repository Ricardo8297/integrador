import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if(arg == '' || arg.length < 3) return value;
    const resultpost=[];
    const resultposts = 'No hay nada';

    for(const post of value){
        if(post.nombre.toLowerCase().indexOf(arg.toLowerCase())> -1 || post.codigo.toLowerCase().indexOf(arg.toLowerCase())> -1 || post.categoria.toLowerCase().indexOf(arg.toLowerCase())> -1 ){
          resultpost.push(post);
        } 
    }
    if(resultpost.length==0){
          
      return resultposts;
    }
    return resultpost;
  }

}
