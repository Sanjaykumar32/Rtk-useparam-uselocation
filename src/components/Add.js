import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addValue, editValue } from "../features/counter/DetailsSlice";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export default function Add() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const dispatch = useDispatch();

  let editid = localStorage.getItem("id");
  const handleClick = () => {
    if (editid) {
      dispatch(
        editValue({
          id: editid,
          name: name,
          amount: amount,
        })
      );
    } else {
      console.log("in else");
      dispatch(addValue({ name: name, amount: amount, id: uuidv4() }));
    }
  };

  const addDataValue = useSelector((state) => state.details.data)[0];

  useEffect(() => {
    if (editid && addDataValue) {
      setName(addDataValue.name);
      setAmount(addDataValue.amount);
    }
  }, [editid]);

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
        <Button variant="primary" type="submit" onClick={handleClick}>
          Submit
        </Button>
      </Link>
    </div>
  );
}
