import Lottie from "lottie-react";
import scifi from '../Utilits/scifi.json'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Book from "./Book";
const BookCategory = () => {
  const param = useParams()
  const cat = param.category
  const categoryBook = useSelector((store)=> store.addbooks.items)
  return (
    <div>
    
      <h1 className="heading">Top {param.category} Books</h1>
      <div className="topbook">
    
      <div className="item" style={{marginLeft:'85px'}}>
        {console.log(categoryBook[cat])}
        {console.log(cat)}
        
     {categoryBook[cat].map((item,index)=>{
        return <Book key={index} item={item}></Book>;
      })}
       
     </div>
      <Lottie animationData={scifi} style={{width:'100%'}}></Lottie>
      </div>
    
     
    </div>
  )
}

export default  BookCategory