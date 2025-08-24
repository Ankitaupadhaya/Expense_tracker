package com.example.controller;

import com.example.model.Expense;
import com.example.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST Controller for handling expense-related API requests.
 * @RestController marks this class as a RESTful web service.
 * @RequestMapping specifies the base URL for all endpoints in this controller.
 * @CrossOrigin enables cross-origin requests, which is necessary for the frontend
 * to make requests to this backend.
 */
@RestController
@RequestMapping("/api/expenses")
@CrossOrigin(origins = "http://localhost:8080")
public class ExpenseController {

    @Autowired
    private ExpenseRepository expenseRepository;

    /**
     * Retrieves all expenses from the database.
     * @GetMapping maps HTTP GET requests to this method.
     * @return A list of all expenses.
     */
    @GetMapping
    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    /**
     * Adds a new expense to the database.
     * @PostMapping maps HTTP POST requests to this method.
     * @param expense The Expense object to be saved.
     * @return The saved Expense object with its generated ID.
     */
    @PostMapping
    public Expense addExpense(@RequestBody Expense expense) {
        return expenseRepository.save(expense);
    }

    /**
     * Deletes an expense by its ID.
     * @DeleteMapping maps HTTP DELETE requests to this method.
     * @param id The ID of the expense to be deleted.
     * @return A ResponseEntity indicating the success of the operation.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExpense(@PathVariable Long id) {
        expenseRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
