package com.CrudProject.angular.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.CrudProject.angular.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
