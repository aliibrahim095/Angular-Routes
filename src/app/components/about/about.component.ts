import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  fname: string;
  lname: string;
  age: number;

  data = [];

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
      this.age >= 20 &&
      this.Age <= 50
    ) {
      this.data.push({
        fname: this.fname,
        lname: this.lname,
        age: this.age,
      });
    }
  }
}
