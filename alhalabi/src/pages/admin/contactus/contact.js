import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../components/admin/tables/table.js";
import DeleteComponent from "../../../components/admin/delete/delete.js";


function ContactDash(){
    const [Contact, setContact] = useState([]);
    useEffect(() => {
      console.log(process.env.REACT_APP_URL);
      axios
        .get(`${process.env.REACT_APP_URL}contact`)
        .then((response) => {
          console.log(response);
          // add an `id` property to each row object
          const data = response.data.message.map((row, index) => ({
            ...row,
            id: index + 1,
          }));
          setContact(data)
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    const columns = [
      { field: "id", headerName: "ID", width: 100 },
        { field: "fullName", headerName: "FullName", width: 300 },
        { field: "message", headerName: "Message", width: 500 },
      { field: "email", headerName: "Email", width: 350 },
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
      <h1>Contact us
      </h1>
      <Table columns={columns} rows={Contact} />
    

    </div>
  )
}
    export default ContactDash;