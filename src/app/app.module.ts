import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { EmployeesComponent } from "./components/employees/employees.component";
import { EmployeedetailsComponent } from "./components/employeedetails/employeedetails.component";
import { AboutComponent } from "./components/about/about.component";
import { ErrorsComponent } from "./components/errors/errors.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  { path: "", redirectTo: "employees", pathMatch: "full" },
  { path: "employees", component: EmployeesComponent },
  { path: "employees/:id", component: EmployeedetailsComponent },
  { path: "about", component: AboutComponent },
  { path: "errors", component: ErrorsComponent },
  { path: "**", component: ErrorsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeedetailsComponent,
    AboutComponent,
    ErrorsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
