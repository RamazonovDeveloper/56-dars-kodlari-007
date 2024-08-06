import React, { useRef, useState } from "react";
import {} from "@ant-design/icons";
import { Button, Card, Input, Modal } from "antd";
import "./App.css";
// import useTodoData from "./utils/data";
import FormComponent from "./components/FormComponent/FormComponent";

function App() {
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
  const [modal, setModal] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  const [editTodoValue, setEditTodoValue] = useState(
    editTodo ? editTodo.task : ""
  );

  const [filteredTodos, setFilteredTodos] = useState(null);

  const searchRef = useRef();

  const handleDelete = (todoId) => {
    console.log("Detete todo id ", todoId);
    const cloneTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(cloneTodos);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleEdit = (todo) => {
    setModal(true);
    setEditTodo(todo);
    setEditTodoValue(todo.task);
  };

  const handleChangeTodo = () => {
    const cloneTodos = [...todos];
    const selectedIndex = todos.findIndex((todo) => todo.id === editTodo.id);

    cloneTodos[selectedIndex].task = editTodoValue;

    setTodos(cloneTodos);
    handleCloseModal();
  };

  const handleSearch = () => {
    const filteredTodos = todos.filter((item) => item.task.includes(searchRef.current.input.value))
    setFilteredTodos(filteredTodos)
  };

  return (
    <div className="container">
      <Modal
        title="Change Todo text"
        open={modal}
        onOk={handleChangeTodo}
        onCancel={handleCloseModal}
      >
        <Input
          value={editTodoValue}
          onChange={(e) => {
            setEditTodoValue(e.target.value);
            console.log(editTodoValue);
          }}
        />
      </Modal>
      <FormComponent todos={todos} setTodos={setTodos} />
      <Input
        onChange={handleSearch}
        ref={searchRef}
        className="mb-3"
        placeholder="Search todo"
      />
      <div className="wrapper grid grid-cols-3 gap-3">
        {filteredTodos
          ? filteredTodos.map((item, index) => {
              return (
                <Card key={index} title={`Todo-${item.id}`} bordered={false}>
                  <h3>{item.task}</h3>
                  <div className="flex justify-end items-center gap-2 mt-4">
                    <Button type="primary" onClick={() => handleEdit(item)}>
                      Update
                    </Button>
                    <Button
                      onClick={() => handleDelete(item.id)}
                      type="primary"
                      danger
                    >
                      Delete
                    </Button>
                  </div>
                </Card>
              );
            })
          : todos.map((item, index) => {
              return (
                <Card key={index} title={`Todo-${item.id}`} bordered={false}>
                  <h3>{item.task}</h3>
                  <div className="flex justify-end items-center gap-2 mt-4">
                    <Button type="primary" onClick={() => handleEdit(item)}>
                      Update
                    </Button>
                    <Button
                      onClick={() => handleDelete(item.id)}
                      type="primary"
                      danger
                    >
                      Delete
                    </Button>
                  </div>
                </Card>
              );
            })}
      </div>
    </div>
  );
}

export default App;
