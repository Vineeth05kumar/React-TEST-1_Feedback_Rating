import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import FormItems from "./components/FormItems";

const App = () => {
  const [list, setList] = useState([]);

  const addingHandler = (newItem) => {
    setList((prev) => {
      return [newItem, ...prev];
    });
  };

  const deleteHandler = (index) => {
    setList((prev) => prev.filter((list, i) => i !== index));
  };

  return (
    <div>
      <Form onAdding={addingHandler} />
      <FormItems items={list} onDelete={deleteHandler}/>
    </div>
  );
};

export default App;
