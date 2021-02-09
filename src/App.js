import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [text, setText] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
    // ...
    return <ItemTable name="text" age="age" gender="gender" />;
  }, [onsubmit]);

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Person</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q John Smith"
            //update related state based on event
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select className="input" type="text" placeholder="Please select ..">
            <option
              value=""
              disabled
              selected
              hidden
              value={gender}
              onChange={(event) => {
                setGender(event.target.value);
              }}
            >
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input
            className="input"
            type="number"
            placeholder="e.q 30"
            value={age}
            onChange={(event) => {
              setAge(event.target.value);
            }}
          ></input>
        </div>

        <button className="button is-primary is-fullwidth" type="submit">
          Submit
        </button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Person List</p>
        {/* sample table */}
        <ItemTable name={"Bob"} gender={"Male"} age={"50"} />
        <p>Janitra Chaikird 620610781</p>
      </div>
    </div>
  );
}

export default App;
