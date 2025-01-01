import Book from "./Book";
import Lottie from "lottie-react";
import scifi from '../Utilits/sci.json'
const Scifiction = (prop) => {
  return (
    <div>
    
      <h1 className="heading">Top Science Fiction Books</h1>
      <div className="topbook">
    
      <div className="item" style={{marginLeft:'85px'}}>
     {prop.scifi.map((item,index)=>{
        return <Book key={index} item={item}></Book>;
      })}
       
     </div>
      <Lottie animationData={scifi} style={{width:'100%'}}></Lottie>
      </div>
    
     
    </div>
  )
}

export default Scifiction
