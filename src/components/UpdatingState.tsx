"use client";
import React, { useState } from "react";

//counter app
function UpdatingState(props: any) {
  //console.log("🚀 ~ file: UpdatingState.tsx:6 ~ UpdatingState ~ props:", props);
  // props object

  // [values , setterMethod] =useState(0)
  // update value
  const [value, setValue] = useState(props.count3);
  const [todo, setTodo] = useState("");
  const [obj, setObj] = useState({ todo1: "", todo2: "", todo3: "" });
  console.log("🚀 ~ file: UpdatingState.tsx:14 ~ UpdatingState ~ obj:", obj);

  console.log("🚀 ~ file: UpdatingState.tsx:13 ~ UpdatingState ~ todo:", todo);
  //console.log("🚀 ~ file: UpdatingState.tsx:13 ~ UpdatingState ~ todo:", todo);
  //   console.log(
  //     "🚀 ~ file: UpdatingState.tsx:12 ~ UpdatingState ~ value:",
  //     value
  //   );

  const increment = () => {
    //value = value + 1;
    setValue(value + 1);
    console.log("🚀 ~ file: UpdatingState.tsx:10 ~ increment ~ value:", value);
  };
  const decrement = () => {
    // value = value - 1;
    setValue(value - 1);
    console.log("🚀 ~ file: UpdatingState.tsx:15 ~ decrement ~ value:", value);
  };

  const updateObject = (e: any) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex gap-5 justify-center items-center">
      <div className="flex flex-col gap-3">
        <input
          className="p-4 border-1"
          placeholder="Enter Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <input
          name="todo1"
          className="p-4 border-1"
          placeholder="Enter Todo1"
          value={obj.todo1}
          onChange={updateObject}
        ></input>
        <input
          name="todo2"
          className="p-4 border-1"
          placeholder="Enter Todo2"
          value={obj.todo2}
          onChange={updateObject}
        ></input>
        <input
          name="todo3"
          className="p-4 border-1"
          placeholder="Enter Todo3"
          value={obj.todo3}
          onChange={updateObject}
        ></input>
      </div>
      <button className="bg-blue-500 rounded-xl p-2" onClick={increment}>
        Increment
      </button>
      {value}
      <button className="bg-red-500 rounded-xl p-2" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default UpdatingState;
