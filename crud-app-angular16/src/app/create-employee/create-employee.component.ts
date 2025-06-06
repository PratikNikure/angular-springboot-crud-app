import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
employee: Employee = new Employee();
constructor(private employeeService: EmployeeService,
  private router:Router){}

saveEmployee(){
  this.employeeService.createEmployee(this.employee).subscribe(data =>{
    console.log(data);
  },
  error =>console.log(error))
}

goToEmployeeList(){
  this.router.navigate(['/employees'])
}
  ngOnInit(): void {
      
  }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
    this.goToEmployeeList();
  }
}
