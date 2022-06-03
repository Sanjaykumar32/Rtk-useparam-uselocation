// import React, { useState } from "react";
// import { Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { editValue } from "../features/counter/DetailsSlice";
// import { v4 as uuidv4 } from "uuid";
// import { Link, useParams } from "react-router-dom";

// export default function Edit() {
//   const addDataValue = useSelector((state) => state.details.data);
//   // console.log("reducer state data", addDataValue);

//   const param = useParams();

//   const existingUser = addDataValue.filter((el) => el.id === param.id);

//   const { name, amount, id } = existingUser[0];

//   const [fname, setFname] = useState(name);
//   const [famount, setFamount] = useState(amount);

//   const dispatch = useDispatch();

//   const handleEdit = () => {
//     dispatch(editValue({ name: fname, amount: famount, id: id }));
//   };

//   return (
//     <div className="m-5">
//       <input
//         type="text"
//         placeholder="Name"
//         value={fname}
//         onChange={(e) => setFname(e.target.value)}
//       />
//       <br></br>
//       <br></br>
//       <input
//         type="text"
//         placeholder="Amount"
//         value={famount}
//         onChange={(e) => setFamount(e.target.value)}
//       />
//       <br></br>
//       <br></br>

//       <Link to="/">
//         <Button variant="primary" type="submit" onClick={handleEdit}>
//           Submit
//         </Button>
//       </Link>
//     </div>
//   );
// }
