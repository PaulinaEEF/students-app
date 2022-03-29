import {React, useState} from 'react';
 import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./styles.css";
import DatePicker from "react-datepicker";
import { DataGrid } from "@mui/x-data-grid";
import "react-datepicker/dist/react-datepicker.css";



export function CreateStudent (){
    const [count, setCount] = useState(1);
   const {
     register,
     handleSubmit,
     watch,
     formState: { errors },
   } = useForm();
   const [startDate, setStartDate] = useState(new Date());

   const onSubmit = (data) => {
       rows.push(data);
     alert(JSON.stringify(rows));
   }; 

//    const onClick
   console.log(watch("example")); 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Add Student</h1>

      <input {...register("id", {value: count })} defaultValue={count} disabled="true" />

      <label>First Name</label>
      <input
        {...register("firstName", {
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors?.firstName?.type === "required" && <p>This field is required</p>}
      {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}

      <label>Last Name</label>
      <input
        {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
      />
      {errors?.lastName?.type === "required" && <p>This field is required</p>}
      {errors?.lastName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}

      <label>Date of Birth</label>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />

      <label>Email</label>
      <input
        {...register("email", {
          required: true,
          pattern:
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        })}
      />
      {errors?.email?.type === "required" && <p>This field is required</p>}
      {errors?.email && <p>You must write a valid email</p>}

      <label>Address</label>
      <input
        {...register("address", {
          required: true,
          pattern: /(\s*[aA-zZ0-9])+$/,
        })}
      />
      {errors?.address?.type === "required" && <p>This field is required</p>}
      {errors?.address && <p>You must write a valid email</p>}

      <div>
        <input type="radio" value="Male" name="gender" defaultChecked="true" />{" "}
        Male
        <input type="radio" value="Female" name="gender" /> Female
      </div>

      <input
        type="submit"
        value="Submit"
        onClick={() => setCount(count + 1)}
      ></input>
      <button type="reset">Cancel</button>
    </form>
  );
};
const rootElement = document.getElementById("root");



export  function ListStudent () {
    
  return (
    <div className="listStudent">
      <h1>Students List</h1>
      {/* Second  tab content will go here */}
      <div style={{ height: 400, width: "83%", paddingLeft: 200 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
        />
      </div>
    </div>
  );
};

const columns = [
  { field: "id", headerName: "#", width: 70 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];