import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
     {{value}}
    </p>
  `,
  styles: [
    `
    :host{
      background:lightgray;
      width:200px;
      height:200px;
  display: flex;
  justify-content: center;
  align-items: center;
    }
    p{
      font-size:2rem;
    }
    `
  ]
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

  constructor() { }


}
