package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * The main entry point for the Expense Tracker application.
 * This class is annotated with @SpringBootApplication, which
 * combines three key annotations:
 * - @Configuration: Tags the class as a source of bean definitions for the application context.
 * - @EnableAutoConfiguration: Tells Spring Boot to start adding beans based on classpath settings,
 * other beans, and various property settings.
 * - @ComponentScan: Tells Spring to look for other components, configurations, and services
 * in the 'com.example' package, allowing it to find and register them.
 */
@SpringBootApplication
public class ExpenseTrackerApplication {

    /**
     * The main method that starts the Spring Boot application.
     * It uses SpringApplication.run() to bootstrap the application.
     * @param args Command line arguments passed to the application.
     */
    public static void main(String[] args) {
        SpringApplication.run(ExpenseTrackerApplication.class, args);
    }
}
