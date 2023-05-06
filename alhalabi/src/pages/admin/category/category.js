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
          }));
          setCategory(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    const columns = [
     z
    
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