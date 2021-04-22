import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-employeedetails",
  templateUrl: "./employeedetails.component.html",
  styleUrls: ["./employeedetails.component.css"],
})
export class EmployeedetailsComponent implements OnInit {
  id;
  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.params.id;
  }

  ngOnInit(): void {}
}
