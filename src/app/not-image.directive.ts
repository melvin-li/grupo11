import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNotImage]'
})
export class NotImageDirective {

  constructor(private elementImg: ElementRef) { }
  @HostListener('error')
  onError(): void{
    this.elementImg.nativeElement.src="https://images.app.goo.gl/AiPSMf99FiqQ9fAs6";
    //this.elementImg.nativeElement.src = 'https://images.app.goo.gl/AiPSMf99FiqQ9fAs6';
  }
}
