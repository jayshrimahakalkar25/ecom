import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  TengthList = [
    {
      name: '10th 1',
      age: '15',
    },
    {
      name: '10th 2',
      age: '18',
    },
    {
      name: '10th 3',
      age: '18',
    },
    {
      name: '10th 4',
      age: '18',
    },
  ];
}
