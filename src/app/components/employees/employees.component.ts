import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"],
})
export class EmployeesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  fname: string;
  lname: string;
  age: number;
  data = [];

  get Fname() {
    return this.Validation.controls.fname.valid;
  }

  get Lname() {
    return this.Validation.controls.lname.valid;
  }

  get Age() {
    return this.Validation.controls.age.valid;
  }

  Validation = new FormGroup({
    fname: new FormControl("", Validators.required),
    lname: new FormControl("", Validators.required),
    age: new FormControl(0, [
      Validators.required,
      Validators.min(20),
      Validators.max(50),
    ]),
  });

  sub() {
    console.log(this.Validation);
    if (
      this.Validation.controls.fname.valid &&
      this.Validation.controls.lname.valid &&
      this.Validation.controls.age.valid
    ) {
      this.data.push({
        fname: this.fname,
        lname: this.lname,
        age: this.age,
      });
    }
  }

  register(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.data.push({
      fname: this.fname,
      lname: this.lname,
      age: this.age,
    });
  }
}
