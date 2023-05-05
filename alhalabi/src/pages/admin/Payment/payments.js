import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../components/admin/tables/table.js";
import DeleteComponent from "../../../components/admin/delete/delete.js";


function Payment(){
    const [Payment, setPayment] = useState([]);
    useEffect(() => {
      console.log(process.env.REACT_APP_URL);
      axios
        .get(`${process.env.REACT_APP_URL}Payment`)
        .then((response) => {
          console.log(response);
          // add an `id` property to each row object
          const data = response.data.message
          setPayment(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    const columns = [
      {field:"id",width: 312},
        { field: "name", headerName: "Name", width: 400 },
        { field: "image", headerName: "Image", width: 400 },
     

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
      <h1>Payment
      </h1>
      <Table columns={columns} rows={Payment} />
    

    </div>
  )
}
    export default Payment;