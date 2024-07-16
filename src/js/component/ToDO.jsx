import React, { useState } from "react";

export default function ToDo() {
  const [items, setItems] = useState([]);
  const [howMany, setHowMany] = useState(0);
  const [userState, setUserState] = useState("");

  function handleItems(value) {
    let newArr = [...items];
    newArr.push(value);
    setItems(newArr);
    setHowMany(howMany + 1);
  }

  function handleDelete(index) {
    setItems(items.filter((_, i) => i !== index));
    setHowMany(howMany - 1);
  }

  function handleClear(){
    setItems([])
    setHowMany(0)
    setUserState("")
  }

  return (
    <div>
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {handleItems(userState);setUserState("")};
        }}
        className="addTask col-12"
        placeholder="What needs to be done?"
        value={userState}
        onChange={(e) => setUserState(e.target.value)}
      ></input>
      {items.map((item, ind) => (
        <div className="row taskItemRow">
          <p key={ind} className="taskItem col-8 me-0">
            {item}
          </p>
          <p className="filler col-2 mx-0"></p>
          <button
            className="deleteBtn col-1 mx-0"
            onClick={() => handleDelete(ind)}
          >
            <i className="fas fa-times icon" style={{ fontSize: "20px" }}></i>
          </button>
        </div>
      ))}
      <p className="footer col-12">{howMany} items remain <button onClick={handleClear}>Clear List</button></p>
    </div>
    
  );
}

{
}
