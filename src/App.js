import React, { useState } from "react";
import { useStore } from "./store";

const addTodo = text => state => {
  return { ...state, todos: [...state.todos, text] };
};

export default function App() {
  const [state, setState] = useStore();
  const { todos } = state;

  const onAdd = text => {
    setState(addTodo(text));
  };
  return (
    <>
      <InputArea onAdd={onAdd} />
      <ul>
        {todos.map(text => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </>
  );
}

function InputArea({ onAdd }) {
  const [text, setText] = useState("");
  const onClick = () => {
    setText("");
    onAdd(text);
  };
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={onClick}>add</button>
    </>
  );
}
