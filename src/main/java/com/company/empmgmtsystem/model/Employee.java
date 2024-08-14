package com.company.empmgmtsystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String name;
    private String email;
    private String pos;
    private Double salary;

    public Employee() {
    }

    public Employee(Long id, String name, String email, String pos, Double salary) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.pos = pos;
        this.salary = salary;
    }

    public Employee(String name, String email, String pos, Double salary) {
        this.name = name;
        this.email = email;
        this.pos = pos;
        this.salary = salary;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPos() {
        return pos;
    }

    public void setPos(String pos) {
        this.pos = pos;
    }

    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", pos='" + pos + '\'' +
                ", salary=" + salary +
                '}';
    }
}
