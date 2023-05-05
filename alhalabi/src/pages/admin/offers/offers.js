import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../components/admin/tables/table.js";
import DeleteComponent from "../../../components/admin/delete/delete.js";


function Offers(){
    const [Offers, setOffers] = useState([]);
    useEffect(() => {
      console.log(process.env.REACT_APP_URL);
      axios
        .get(`${process.env.REACT_APP_URL}Offers`)
        .then((response) => {
          console.log(response);
          // add an `id` property to each row object
          const data = response.data.message
          setOffers(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    const columns = [
      {field:"id",width: 212},
        { field: "name", headerName: "Name", width: 300 },
        { field: "dateStart", headerName: "DateStart", width: 300 },
      { field: "dateEnd ", headerName: "dateEnd", width: 300 },
      { field: "product ", headerName: "Product", width: 300 },
      { field: "percentage ", headerName: "Percentage", width: 300 },

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
      <h1>Offers
      </h1>
      <Table columns={columns} rows={Offers} />
    

    </div>
  )
}
    export default Offers;