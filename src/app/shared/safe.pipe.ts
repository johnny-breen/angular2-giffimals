import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer }        from '@angular/platform-browser';

/*
 * bypasses trust security on URL's
 * Usage:
 *   url | mySafe
*/
@Pipe({ name: 'mySafe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
