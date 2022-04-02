import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  id:number=0;
    constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router){ }
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
      this.employeeService.deleteEmployee(this.id).subscribe(data=>{
        this.router.navigate(['first-component']);
      },error=>console.log(error));
    }
   
  
}
