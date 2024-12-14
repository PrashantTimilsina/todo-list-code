import { useEffect, useState } from "react";

function Todo() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [editedIndex, setEditedIndex] = useState(null);
  const [editedValue, setEditedValue] = useState("");
  useEffect(function () {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setList(JSON.parse(storedTasks));
    }
  }, []);
  useEffect(
    function () {
      if (list.length > 0) {
        localStorage.setItem("tasks", JSON.stringify(list));
      }
    },
    [list]
  );
  function addTask(item) {
    if (item.trim()) {
      setList((list) => [item, ...list]);
      setValue("");
    }
  }
  function editTask(index) {
    setEditedIndex(index);
    setEditedValue(list[index]);
  }
  function saveTask(index) {
    const updatedList = [...list];

    updatedList[index] = editedValue;
    setList(updatedList);
    setEditedIndex(null);
  }
  function deleteTask(index) {
    setList(list.filter((_, i) => i != index));
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter the text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => addTask(value)}>Add Task</button>
      </div>
      {list.map((el, i) => (
        <div key={i}>
          <input
            type="text"
            value={editedIndex === i ? editedValue : el}
            readOnly={editedIndex != i}
            spellCheck={false}
            onChange={(e) => setEditedValue(e.target.value)}
          />
          {editedIndex === i ? (
            <button onClick={() => saveTask(i)}>Save</button>
          ) : (
            <button onClick={() => editTask(i)}>Edit</button>
          )}
          <button onClick={() => deleteTask(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
