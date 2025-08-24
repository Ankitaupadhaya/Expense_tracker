💰 **Expense Tracker**
This is a full-stack web application designed to help users track their daily expenses. The application provides a simple and intuitive interface to add, view, edit, and delete expense records. It leverages a robust Spring Boot backend for data management and a clean, responsive front end built with modern web technologies.

✨ **Features**
Add Expenses: Easily add a new expense with a name, amount, and date.
View Expenses: See a list of all your recorded expenses in a clean, organized table.
Edit Expenses: Modify the details of an existing expense.
Delete Expenses: Remove an expense record from the tracker.
Total Calculation: The total amount of all expenses is automatically calculated and displayed.
Date Picker: Use a calendar-based date picker to select a specific date for each expense.

**🚀 Technologies Used**
**Backend**
Java 17: The core programming language.
Spring Boot: A powerful framework for building stand-alone, production-grade Spring-based applications.
Spring Data JPA: Simplifies data access and persistence with a MySQL database.
Lombok: Reduces boilerplate code in the Java model.
Maven: A build automation tool for managing dependencies and building the project.
MySQL: The relational database used to store expense data.

**Frontend**
HTML: Structures the web page content.
CSS (Tailwind CSS): Provides modern, utility-first styling for a clean and responsive design.
JavaScript: Manages all the user interactions and communication with the backend API.

**⚙️ How to Run the Project**
**Prerequisites**
Java Development Kit (JDK) 17 or higher
Maven
MySQL Server
Git

**Setup Steps**
Clone the Repository:
git clone https://github.com/AnkitaUpadhaya/expense-tracker.git
cd expense-tracker-backend

Configure the Backend:
Open the src/main/resources/application.properties file.
Update the spring.datasource.url, spring.datasource.username, and spring.datasource.password properties to match your MySQL database credentials.
Make sure to create a database named expensetracker.

Run the Spring Boot Application:
You can run the application directly from your IDE or use Maven from the terminal:
mvn spring-boot:run

Access the Application:
Once the server has started, open your web browser and navigate to:
http://localhost:8080
The front-end files are automatically served by the Spring Boot application, so no separate server is required for the frontend.

**📈 Future Enhancements**
User Authentication: Add user login functionality to make the application multi-user.
Data Visualization: Incorporate charts or graphs to visualize expense trends over time.

Expense Categories: Allow users to categorize expenses (e.g., food, transport, bills).

Filtering and Sorting: Add options to filter expenses by date range, category, or amount.
