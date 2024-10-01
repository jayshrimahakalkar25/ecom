import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss'],
})
export class AdditionComponent {
  additionResult: any = 0;
  student = [489797, 5465464, 46464, 6464, 6464, 6464, 66 + 565];
  increase() {
    this.additionResult = this.additionResult + 1;
  }

  decrease() {
    this.additionResult = this.additionResult - 1;
  }

  reset() {
    this.additionResult = 0;
  }
}
