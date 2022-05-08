import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List";
import Alert from "./components/Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [checkEditItem, setCheckEditItem] = useState(false);
  const [editId, setEditId] = useState(null);

  const submitData = (e) => {
    e.preventDefault();
    if (!name) {
      //  show alert
      setAlert({
        show: true,
        msg: "Please input your todolist !!",
        type: "error",
      });
    } else if (checkEditItem && name) {
      // update data
      const result = list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name };
        }

        return item;
      });
      setList(result);
      setName("");
      setCheckEditItem(false);
    } else {
      const newItem = {
        id: uuidv4(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
      setAlert({
        show: true,
        msg: "Updated already !!",
        type: "success",
      });
    }
  };

  const removeItem = (id) => {
    const result = list.filter((item) => item.id !== id);
    setList(result);
    setAlert({ show: true, msg: "Deleted already !!", type: "error" });
  };

  const editItem = (id) => {
    setCheckEditItem(true);
    setEditId(id);
    const searchItem = list.find((item) => item.id === id);
    setName(searchItem.title);
  };

  return (
    <section className="container">
      <h1>Todolist</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} list={list} />}
      <form className="form-group" onSubmit={submitData}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button type="submit" className="submit-btn">
            {checkEditItem ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      <section className="list-container">
        {list.map((data, index) => {
          return (
            <List
              key={index}
              {...data}
              checkEditItem={checkEditItem}
              removeItem={removeItem}
              editItem={editItem}
            />
          );
        })}
      </section>
    </section>
  );
}

export default App;
