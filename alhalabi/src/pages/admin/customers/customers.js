import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../components/admin/tables/table.js";
import DeleteComponent from "../../../components/admin/delete/delete.js";


function Customers(){
    const [Customers, setCustomers] = useState([]);
    useEffect(() => {
      console.log(process.env.REACT_APP_URL);
      axios
        .get(`${process.env.REACT_APP_URL}Customers`)
        .then((response) => {
          console.log(response);
          // add an `id` property to each row object
          const data = response.data.message
          setCustomers(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    const columns = [
      {field:"id",width: 212},
        { field: "name", headerName: "Name", width: 300 },
        { field: "phoneNum", headerName: "PhoneNumber", width: 300 },
      { field: "email ", headerName: "Email", width: 300 },
      { field: "password ", headerName: "Password", width: 300 },
      { field: "addresse ", headerName: "Addresse", width: 300 },
      { field: "role", headerName: "Role", width: 300 },

      {
        field: "delete",
        headerName: "Delete",
        width: 125,
        renderCell: (params) => {
          return <DeleteComponent Id={params.row.id} />;
        },
     
}];
 
  return (
    <div>
      <h1>Customers
      </h1>
      <Table columns={columns} rows={Customers} />
    

    </div>
  )
}
    export default Customers;