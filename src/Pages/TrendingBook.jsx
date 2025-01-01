import Book from "./Book"
import './CSS/book.css'
import bg from '../Utilits/bg.png'
const TrendingBook = (prop) => {
  return (
    <div>
      {/* {console.log(prop.top)} */}
      <h1 className="heading">{prop.nm}Books</h1>
      <div className="topbook">
      <img src={bg} className='top'></img>
      <div className="item">
     {prop.top.map((item,index)=>{
        return <Book key={index} item={item}></Book>;
      })}
       
     </div>
      </div>
    
     
    </div>
  )
}

export default TrendingBook
