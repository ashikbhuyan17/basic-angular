import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enterName !: string
  parentData = ""
  transferData() {
    this.parentData = this.enterName
    console.log("//////////", this.enterName)

  }



  value !: object
  sendData(value: object) {
    this.value = value
    console.log('............', this.value)

  }

}
