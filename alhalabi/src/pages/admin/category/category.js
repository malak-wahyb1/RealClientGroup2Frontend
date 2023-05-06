import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../components/admin/tables/table";
import DeleteComponent from "../../../components/admin/delete/delete";
function Category(){
    const [Category, setCategory] = useState([]);
    useEffect(() => {
      console.log(process.env.REACT_APP_URL);
      axios
        .get(`${process.env.REACT_APP_URL}category`)
        .then((response) => {
          console.log(response);
          // add an `id` property to each row object
          const data = response.data.message.map((row, index) => ({
            ...row,
            id: index + 1,
            image: `${process.env.REACT_APP_URL}${row.image}` 
          }));
          setCategory(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    const columns = [
      {field:"id",width: 312},
        { field: "Name", headerName: "Name", width: 450 },
        { field: "image", headerName: "Image", width: 300 },
    
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
      <h1>Categories </h1>
      
      <Table columns={columns} rows={Category} />
      
    </section>
)
}
export default Category;