package com.example.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDate;

/**
 * Represents an expense record in the database.
 * The @Entity annotation marks this class as a JPA entity.
 * Lombok's @Data annotation automatically generates getters, setters,
 * equals(), hashCode(), and a toString() method.
 */
@Entity
@Data
public class Expense {

    /**
     * The unique identifier for the expense.
     * @Id marks it as the primary key.
     * @GeneratedValue configures the generation strategy for the ID.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; // Corrected from 'description' to 'name' to match frontend JSON
    private double amount;
    private LocalDate date;
}
