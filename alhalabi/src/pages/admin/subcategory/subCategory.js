import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../components/admin/tables/table";
import DeleteComponent from "../../../components/admin/delete/delete";
function SubCategory(){
    const [SubCategory, setSubCategory] = useState([]);
    useEffect(() => {
      console.log(process.env.REACT_APP_URL);
      axios
        .get(`${process.env.REACT_APP_URL}subCategory`)
        .then((response) => {
          console.log(response);
          // add an `id` property to each row object
          const data = response.data.message.map((row, index) => ({
            ...row,
            id: index + 1,
          }));
          setSubCategory(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    const columns = [
      {field:"id",width: 312},
        { field: "Name ", headerName: "Name", width: 450 },
        { field: "category", headerName: "Category", width: 300 },
    
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
      <h1>SubCategories </h1>
      
      <Table columns={columns} rows={SubCategory} />
      
    </section>
)
}
export default SubCategory;