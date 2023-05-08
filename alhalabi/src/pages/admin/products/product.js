import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../components/admin/tables/table";
import DeleteComponent from "../../../components/admin/delete/delete";
import FormComponent from "../../../components/admin/addForm/addFom";
import EditAdmin from "../../../components/admin/editForm/editAdmin";
import { Avatar } from "@mui/material";
function Products(){
    const [Products, setProducts] = useState([]);
    useEffect(() => {
      console.log(process.env.REACT_APP_URL);
      axios
        .get(`${process.env.REACT_APP_URL}product`)
        .then((response) => {
          console.log(response.data.response);
          // add an `id` property to each row object
          const data = response.data.response.map((row, index) => ({
            ...row,
            id: index + 1,
            image: `${process.env.REACT_APP_URL}${row.image}` 
          }));
          setProducts(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    const columns = [
 
        { field: "name", headerName: "Name", width: 200 },
        { field: "packaging", headerName: "Packaging", width: 200 },
        { field: "price", headerName: "Price", width: 200 },
        { field: "brand", headerName: "Brand", width: 200 },
        { field: "quantity", headerName: "Quantity", width: 200 },
        { field: "subCategory", headerName: "SubCategory", width: 200 },
        { field: "image", headerName: "Image", width: 200,renderCell:(params)=>{
          return <Avatar alt="Remy Sharp" src={params.row.image} />
        }  },
        {
          field: "Action",
          headerName: "Action",
          width: 275,
          renderCell: (params) => {
            return (
              <>
                <DeleteComponent Id={params.row.id} />
                <EditAdmin
                  inputFields={[
                    { name: "userName", label: "User Name", type: "text" },
                    { name: "email", label: "Email", type: "email" },
                    { name: "FirstName", label: "FullName", type: "email" },
                  ]}
                  title="Category"
                />
              </>
            );
          },
        },];
      
    
return(
    <section>
      <h1>Products </h1>
      <FormComponent    inputFields={[
          { name: "userName", label: "User Name", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "FirstName", label: "FullName", type: "text" },
          { name: "LastName", label: "LastName", type: "text" },
          { name: "password", label: "Password", type: "text" },
        ]}
        title="Product" />
      <Table columns={columns} rows={Products} />
      
    </section>
)
}
export default Products;