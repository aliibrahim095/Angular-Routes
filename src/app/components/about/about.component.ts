import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  id:number=0;
  fname: string;
  lname: string;
  age: number;

  employees = [];

  get Fname() {
    return this.fname;
  }

  get Lname() {
    return this.lname;
  }

  get Age() {
    return this.age;
  }

  sub() {
    if (
      this.fname &&
      this.lname &&
      this.age &&
      this.age >= 18 &&
      this.Age <= 60
    ) {
      this.employees.push({
        id:++this.id,
        fname: this.fname,
        lname: this.lname,
        age: this.age,
      });
    }
    this.fname="";
    this.lname="";
    this.age=undefined;
  }
}
