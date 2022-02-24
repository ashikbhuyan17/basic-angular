import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getData(data: string) {
    console.log('function called')
    console.log(data);

  }
  // counter()
  countValue: number = 0
  counter(data: string) {
    // this.countValue++
    data == "minus" ? this.countValue-- : this.countValue++
  }

  // interpolation vs property binding :
  //   interpolation vs property binding :
  // interpolation string,number .... niye koaj kore bt boolean allow kore na 
  // bt property binding both allow (boolean,string,num.....)
  disable: boolean = false
  bindingData: string = "pretty"



  // If else condition
  show = true
  showValueType = "no"

  //  Switch case
  color: string = "orange"



  //  For Loop | *ngFor
  users = ['ashik', 22, 'swe', '017*****', 'male']
  userObject = [
    { name: 'ashik', age: 22, department: 'swe' },
    { name: 'ashik1', age: 62, department: 'swe' },
    { name: 'ashik2', age: 12, department: 'swe' },
    { name: 'ashik3', age: 20, department: 'swe' },

  ]

  // Nested Loop
  nestedObject = [
    { name: 'ashik', age: 22, department: 'swe', socialAccount: ['facebook', 'youtube', 'linkdin'] },
    { name: 'ashik1', age: 62, department: 'swe', socialAccount: ['facebook', 'youtube', 'linkdin'] },
    { name: 'ashik2', age: 12, department: 'swe', socialAccount: ['facebook', 'youtube', 'linkdin'] },
    { name: 'ashik3', age: 20, department: 'swe', socialAccount: ['facebook', 'youtube', 'linkdin'] },

  ]

}
