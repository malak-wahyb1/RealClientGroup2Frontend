import { useEffect,useState } from "react"
import CardProduct from "../card/card"
import axios from 'axios'
function AllCategories(){
    const [categories,setCategories]=useState([])
    useEffect(()=>{getCategories()},[])
    const getCategories=()=>{
        axios.get(`${process.env.REACT_APP_URL}/product/getOnlyFour`).then((response)=>{
            setCategories(response.data)
            console.log(response)

        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        categories.map((category)=>{
            return(
                <CardProduct/>
            )
        })
    )
}
export default AllCategories