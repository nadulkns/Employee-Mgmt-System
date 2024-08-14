package com.company.empmgmtsystem.service;

import com.company.empmgmtsystem.model.Employee;
import com.company.empmgmtsystem.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getEmployee() {
        return employeeRepository.findAll();
    }

    public Employee saveEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public Employee getEmployeeById(int id){
        return employeeRepository.findById(id).orElse(null);
    }

    public void deleteEmployee(int id){
        employeeRepository.deleteById(id);
    }

    public Employee updateEmployee(int id, Employee employee){
        Employee emp= employeeRepository.getReferenceById(id);

        if (emp != null){
            emp.setName(employee.getName());
            emp.setEmail(employee.getEmail());
            emp.setPos(employee.getPos());
            emp.setSalary(employee.getSalary());

            return saveEmployee(emp);
        }
        return null;
    }

}
