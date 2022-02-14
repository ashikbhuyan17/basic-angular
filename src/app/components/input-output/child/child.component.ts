import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() parentData!: string;
  @Output() public sendData = new EventEmitter<object>()

  name = [
    {
      name: 'ashik',
      age: 20
    },
    {
      name: 'joy',
      age: 22
    },
  ]

  ngOnInit(): void {
    console.log('////////', this.parentData)
    this.sendData.emit(this.name)
  }




}
