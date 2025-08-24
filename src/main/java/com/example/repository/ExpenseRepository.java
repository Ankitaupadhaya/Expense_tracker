package com.example.repository;

import com.example.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * A repository for managing Expense entities.
 * JpaRepository provides standard CRUD (Create, Read, Update, Delete)
 * functionality out of the box, so no custom method implementations are needed here.
 */
@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
}
