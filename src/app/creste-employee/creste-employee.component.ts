import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-creste-employee',
  templateUrl: './creste-employee.component.html',
  styleUrls: ['./creste-employee.component.css']
})
export class CresteEmployeeComponent implements OnInit {
employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService,private rout:Router) { }

  ngOnInit(): void {
  }
saveEmployee()
{
  this.employeeService.createEmployee(this.employee).subscribe(data=>{
console.log(data);
this.goToEmployeeList();
  },error=>console.log(error));
}
goToEmployeeList()
{
  this.rout.navigate(["/first-component"]);
}
  onSubmit()
  {
    console.log(this.employee);
    this.saveEmployee();
  }
}
