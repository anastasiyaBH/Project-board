import { Directive, Input, ElementRef, Renderer2, OnChanges} from '@angular/core';

@Directive({
  selector: '[appStyleCardBackground]'
})
export class StyleCardBackgroundDirective implements OnChanges {
  @Input() appStyleCardBackground: Date | string;
  @Input() isDone: boolean;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnChanges() {
    const date = new Date(this.appStyleCardBackground);
    const currentDate = new Date();
    const timeInterval = currentDate.getTime() - date.getTime();
    const daysInterval = Math.ceil(timeInterval / (1000 * 3600 * 24));

    if (daysInterval < 3 && !this.isDone) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', '#ea0b0b');
    } else if (daysInterval < 7 && !this.isDone) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', '#e8e101');
    }
}
}
