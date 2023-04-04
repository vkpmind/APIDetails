import axios from "axios";
import React, { useEffect, useState } from "react";

function UserApiDetails() {
  const [num, setNumber] = useState("5");
  const [names, setName] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://randomuser.me/api`);
      setName(res.data.results);
    }
    getData();
  }, [num]);

  const selectNumber = (event) => {
    setNumber(event.target.value);
  };

  return (
    <React.Fragment>
      <div class="card-body border border-primary border-1 mt-3 mb-3">
        <div class="container mb-3">
          <h1 class="text-center mb-5">API content..... </h1>
          <div class="row mb-3">
            <div class="col text-center">
              <select
                class="form-select"
                onChange={selectNumber}
                aria-label="Default select example"
              >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="5" selected>
                  Five
                </option>
              </select>
            </div>
            <div class="col">
              <div>
                <b>you choosen:</b> <i>{num}</i>
              </div>
              <div>
                {names.map((ele) => (
                  <li key={ele.email}>
                    {" "}
                    <b>Full name:</b> {ele.name.title} {ele.name.first}{" "}
                    {ele.name.last}
                    <br />
                    <b>Email id:</b> {ele.email}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserApiDetails;
