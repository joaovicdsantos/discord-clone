import { Pipe, PipeTransform } from '@angular/core';
import * as MarkdownIt from 'markdown-it';

@Pipe({
  name: 'marked',
})
export class MarkedPipe implements PipeTransform {
  md: MarkdownIt = new MarkdownIt('commonmark', {
    breaks: true,
    html: true,
    typographer: true,
  });

  transform(value: string) {
    let teste = value.split('\n');
    console.log(teste);
    return this.md.render(value);
  }
}
