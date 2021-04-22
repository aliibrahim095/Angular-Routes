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
  id:number=0;
  fname: string;
  lname: string;
  age: number;

  employees = [];

  get isValidFname() {
    return this.Validation.controls.fname.valid;
  }

  get isValidLname() {
    return this.Validation.controls.lname.valid;
  }

  get isValidAge() {
    return this.Validation.controls.age.valid;
  }

  Validation = new FormGroup({
    fname: new FormControl(undefined, [Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
    lname: new FormControl(undefined, [Validators.required,Validators.minLength(3)]),
    age: new FormControl(undefined, [
      Validators.required,
      Validators.min(18),
      Validators.max(60),
    ]),
  });

  sub() {
    console.log(this.Validation);
    if (
      this.Validation.valid
    ) {
      this.employees.push({
        id:++this.id,
        fname: this.fname,
        lname: this.lname,
        age: this.age,
      });
      this.fname="";
      this.lname="";
      this.age=undefined;
    }
  }

  // register(fname, lname, age) {
  //   this.fname = fname;
  //   this.lname = lname;
  //   this.age = age;
  //   this.employees.push({
  //     fname: this.fname,
  //     lname: this.lname,
  //     age: this.age,
  //   });
  // }

}