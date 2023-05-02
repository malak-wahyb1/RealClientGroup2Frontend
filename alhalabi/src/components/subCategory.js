function SubCategory(props){
    return(
   
<section className="subCategory">
   { props.subCategory.map((sub)=>{
        console.log(sub)
        return(
            <span style={{marginRight:"10px"}}>{sub}</span>
        )
  
        })}
     </section>    
        )}

export default SubCategory