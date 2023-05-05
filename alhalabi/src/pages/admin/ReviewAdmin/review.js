import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../../components/admin/tables/table.js";


function Review(){
    const [Review, setReview] = useState([]);
    useEffect(() => {
      console.log(process.env.REACT_APP_URL);
      axios
        .get(`${process.env.REACT_APP_URL}Review`)
        .then((response) => {
          console.log(response);
          // add an `id` property to each row object
          const data = response.data.message.map((row, index) => ({
            ...row,
            id: index + 1,
          }));
          setReview(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    const columns = [
      {field:"id",width: 412},
        { field: "Name ", headerName: "Name", width: 450 },
        { field: "image", headerName: "Image", width: 400 },
    
     
      ];
 
  return (
    <div>
      <h1>Review 
      </h1>
      <Table columns={columns} rows={Review} />

    </div>
  )
}
    export default Review;