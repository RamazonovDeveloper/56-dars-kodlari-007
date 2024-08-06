import React, { useRef } from "react";
import { Button, Input } from "antd";

function FormComponent(props) {
  const { todos, setTodos } = props;
  const addInputRef = useRef();
  const handleAdd = () => {
    let cloneTodos = [...todos];

    let newTodo = {
      id: todos.length + 1,
      task: addInputRef.current.input.value,
    };

    cloneTodos.push(newTodo);
    setTodos(cloneTodos);

    addInputRef.current.input.value = ""
  };

  return (
    <div className="flex justify-between items-center gap-2 my-4">
      <Input ref={addInputRef} placeholder="Enter todo text" />
      <Button onClick={handleAdd}>Add todo</Button>
    </div>
  );
}

export default FormComponent;
