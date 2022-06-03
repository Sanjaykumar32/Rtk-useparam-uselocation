import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteitem } from "../features/counter/DetailsSlice";
import { Link } from "react-router-dom";

export default function Tables() {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.details.data);
  // console.log("list data", list);

  const [search, setSearch] = useState("");
  const removeStorage = () => {
    localStorage.clear();
  };
  const total = () => {
    let data = {
      amount: 0,
    };

    list.forEach((el) => {
      if (el.amount) {
        data.amount = data.amount + parseInt(el.amount);
      }
    });
    return data;
  };

  let Amount = total();

  const handleDelete = (id) => {
    dispatch(deleteitem({ id }));
  };

  const handleId = (el) => {
    localStorage.setItem("id", el);
    // console.log
  };
  return (
    <div className="mt-5">
      <div>
        Filter :-
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <br></br>
      <h5> Totol : {Amount.amount} </h5>
      <br></br>
      <Link to="/add" onClick={() => removeStorage()}>
        <button> Add Expense </button>
      </Link>

      <table border="1" width="50%" className="mt-5">
        <thead>
          <tr>
            <th> Name </th>
            <th> Amount </th>
          </tr>
        </thead>

        <tbody>
          {list
            ?.filter((val) => {
              if (search == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((el, i) => {
              return (
                <tr key={i}>
                  <th>{el.name}</th>
                  <th>{el.amount}</th>
                  <th>
                    <Link to="/add" state={{ test: el }}>
                      <button>Edit Button</button>
                    </Link>
                  </th>
                  <th>
                    <button onClick={() => handleDelete(el.id)}>Delete</button>
                  </th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
