import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { FormatterService } from '../../services/lkd-formatter.service';

@Component({
  selector: 'lkd-btn',
  template: `<ng-content></ng-content>`
})
export class LkdButtonComponent implements OnInit {

  constructor(
    private button: ElementRef,
    private renderer: Renderer2,
    private formatter: FormatterService
  ) {
    this.formatter.addClass('lkd-btn', this.button, this.renderer);
  }

  ngOnInit() {

  }

}
