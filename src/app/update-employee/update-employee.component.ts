import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
id:number=0;
employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router){ }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
      console.log(this.employee)
    },error=>console.log(error));
  }
  onSubmit()
  {
      this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
        this.router.navigate(['first-component']);
      },error=>console.log(error));
  }

}
