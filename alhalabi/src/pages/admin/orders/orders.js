import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../components/admin/tables/table";
import DeleteComponent from "../../../components/admin/delete/delete";
function Orders(){
    const [Orders, setOrders] = useState([]);
    useEffect(() => {
      console.log(process.env.REACT_APP_URL);
      axios
        .get(`${process.env.REACT_APP_URL}Orders`)
        .then((response) => {
          console.log(response);
          // add an `id` property to each row object
          const data = response.data.message.map((row, index) => ({
            ...row,
            id: index + 1,
          }));
          setOrders(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    const columns = [
      {field:"id",width: 300},
        { field: "totaleprice", headerName: "TotalePrice", width: 300 },
        { field: "customer", headerName: "Customer", width: 300 },
        { field: "product", headerName: "Product", width: 300 },
        { field: "payment", headerName: "Payment", width: 300 },
        { field: "status", headerName: "Status", width: 300 },
        { field: "note", headerName: "Note", width: 300 },

    
        {
          field: "delete",
          headerName: "Delete",
          width: 175,
          renderCell: (params) => {
            return <DeleteComponent Id={params.row.id} />;
          },
       
  }];
      
    
return(
    <section>
      <h1>Orders </h1>
      
      <Table columns={columns} rows={Orders} />
      
    </section>
)
}
export default Orders;