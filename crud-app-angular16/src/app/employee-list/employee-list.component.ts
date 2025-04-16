import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees!: Employee[];
  constructor(private employeeService:EmployeeService,
    private router: Router
  ){

  }
  ngOnInit(): void {
      
    // this.employees=[
         
    //   {
    //     "id": 1,
    //     "firstName": "Pratik",
    //     "lastName": "Sharma",
    //     "emailId": "ps@gmail.com"
    // },
    // {
    //     "id": 2,
    //     "firstName": "sanjay",
    //     "lastName": "Shukla",
    //     "emailId": "sanjay@gmail.com"
    // }
     
    // ]

    this.getEmployees();

    }

  // private getEmployees(){
  //   this.employeeService.getEmployeeList().subscribe(data => {
  //     this.employees=data;
  //   })
  // }
  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(
      data => {
        console.log("Employee Data from API:", data); // ✅ check this in browser console
        this.employees = data;
      },
      error => {
        console.error("Error while fetching employees:", error);
      }
    );
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id])
  }
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data =>{
      console.log(data);
      this.getEmployees();
    })
  }

  employeeDetails(id:number){
    this.router.navigate(['employee-details', id]);
  }
}
