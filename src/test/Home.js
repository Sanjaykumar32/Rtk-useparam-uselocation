import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addValue, editValue } from "../features/counter/DetailsSlice";
import { v4 as uuidv4 } from "uuid";
import { Link, useLocation } from "react-router-dom";

export default function Add() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();

  const location = useLocation();

  const data = location?.state?.test;
  //   console.log("data from location", data);

  const reducerData = useSelector((state) => state.details.data)[0];

  const addEvent = () => {
    if (data) {
      dispatch(
        editValue({
          id: data.id,
          name: name,
          amount: amount,
        })
      );
    } else {
      dispatch(addValue({ name: name, amount: amount, id: uuidv4() }));
    }
  };

  useEffect(() => {
    if (data && reducerData) {
      setName(reducerData.name);
      setAmount(reducerData.amount);
    }
  }, [data]);

  return (
    <div className="m-5">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br></br>
      <br></br>

      <Link to="/">
        <Button variant="primary" type="submit" onClick={addEvent}>
          Submit
        </Button>
      </Link>
    </div>
  );
}
