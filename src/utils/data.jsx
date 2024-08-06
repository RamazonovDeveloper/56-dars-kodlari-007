import React, { useState } from "react";

function useTodoData() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      fullName: "John Doe",
      email: "john.doe@example.com",
      task: "Developing a new feature",
      department: "Engineering",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      email: "jane.smith@example.com",
      task: "Designing UI/UX",
      department: "Design",
    },
    {
      id: 3,
      fullName: "Alice Johnson",
      email: "alice.johnson@example.com",
      task: "Testing software",
      department: "Quality Assurance",
    },
    {
      id: 4,
      fullName: "Bob Brown",
      email: "bob.brown@example.com",
      task: "Managing projects",
      department: "Project Management",
    },
    {
      id: 5,
      fullName: "Charlie Davis",
      email: "charlie.davis@example.com",
      task: "Overseeing HR policies",
      department: "Human Resources",
    },
    {
      id: 6,
      fullName: "Diana Miller",
      email: "diana.miller@example.com",
      task: "Maintaining IT infrastructure",
      department: "IT Support",
    },
    {
      id: 7,
      fullName: "Ethan Wilson",
      email: "ethan.wilson@example.com",
      task: "Developing marketing strategies",
      department: "Marketing",
    },
    {
      id: 8,
      fullName: "Fiona Garcia",
      email: "fiona.garcia@example.com",
      task: "Analyzing financial data",
      department: "Finance",
    },
    {
      id: 9,
      fullName: "George Martinez",
      email: "george.martinez@example.com",
      task: "Handling customer inquiries",
      department: "Customer Support",
    },
    {
      id: 10,
      fullName: "Hannah Lee",
      email: "hannah.lee@example.com",
      task: "Conducting market research",
      department: "Research",
    },
  ]);

  return { todos, setTodos };
}

export default useTodoData;
