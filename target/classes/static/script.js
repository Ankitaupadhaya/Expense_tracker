// API endpoint for your Spring Boot application
const API_URL = 'http://localhost:8080/api/expenses';

// Get DOM elements
const expenseForm = document.getElementById('expense-form');
const expenseTableBody = document.getElementById('expense-table-body');
const expenseNameInput = document.getElementById('name');
const expenseAmountInput = document.getElementById('amount');
const expenseDateInput = document.getElementById('date');
const totalAmountDisplay = document.getElementById('total-amount');
const formTitle = document.getElementById('form-title');
const submitButton = document.getElementById('submit-button');
const cancelButton = document.getElementById('cancel-button');

let editingExpenseId = null;

// Function to fetch and display expenses
async function fetchExpenses() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const expenses = await response.json();
        renderExpenses(expenses);
        calculateTotal(expenses);
    } catch (error) {
        console.error('Error fetching expenses:', error);
    }
}

// Function to render expenses in the table
function renderExpenses(expenses) {
    expenseTableBody.innerHTML = ''; // Clear the table body
    expenses.forEach(expense => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">${expense.name}</td>
            <td class="px-6 py-4 whitespace-nowrap">₹${expense.amount.toFixed(2)}</td>
            <td class="px-6 py-4 whitespace-nowrap">${expense.date}</td>
            <td class="px-6 py-4 whitespace-nowrap">
                <button onclick="editExpense(${expense.id})" class="text-indigo-600 hover:text-indigo-900 font-medium mr-4">Edit</button>
                <button onclick="deleteExpense(${expense.id})" class="text-red-600 hover:text-red-900 font-medium">Delete</button>
            </td>
        `;
        expenseTableBody.appendChild(row);
    });
}

// Function to calculate and display the total amount
function calculateTotal(expenses) {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalAmountDisplay.textContent = `₹${total.toFixed(2)}`;
}

// Function to add or update an expense
async function addOrUpdateExpense(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const name = expenseNameInput.value;
    const amount = expenseAmountInput.value;
    const date = expenseDateInput.value;

    const expenseData = {
        name: name,
        amount: parseFloat(amount),
        date: date
    };

    try {
        let response;
        if (editingExpenseId) {
            // Update an existing expense
            response = await fetch(`${API_URL}/${editingExpenseId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(expenseData),
            });
        } else {
            // Add a new expense
            response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(expenseData),
            });
        }

        if (!response.ok) {
            throw new Error('Failed to save expense');
        }

        // Reset the form and UI
        resetForm();
        fetchExpenses();
    } catch (error) {
        console.error('Error saving expense:', error);
    }
}

// Function to handle the edit button click
async function editExpense(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch expense for editing');
        }
        const expenseToEdit = await response.json();

        // Fill the form with the expense data
        expenseNameInput.value = expenseToEdit.name;
        expenseAmountInput.value = expenseToEdit.amount;
        expenseDateInput.value = expenseToEdit.date;

        // Set the editing state
        editingExpenseId = id;
        formTitle.textContent = 'Edit Expense';
        submitButton.textContent = 'Update Expense';
        cancelButton.classList.remove('hidden');
    } catch (error) {
        console.error('Error during edit:', error);
    }
}

// Function to delete an expense
async function deleteExpense(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Failed to delete expense');
        }

        // Refresh the expense list
        fetchExpenses();
    } catch (error) {
        console.error('Error deleting expense:', error);
    }
}

// Function to reset the form and UI state
function resetForm() {
    expenseForm.reset();
    editingExpenseId = null;
    formTitle.textContent = 'Add a New Expense';
    submitButton.textContent = 'Add Expense';
    cancelButton.classList.add('hidden');
}

// Event listeners
expenseForm.addEventListener('submit', addOrUpdateExpense);
cancelButton.addEventListener('click', resetForm);

// Initial fetch to load expenses when the page loads
document.addEventListener('DOMContentLoaded', fetchExpenses);
