import './CSS/BookDetails.css'
// import bg from '../Utilits/bg.png'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const BookDetails = () => {
  const param = useParams()
  const cat = param.title;
  let str = Math.floor(Math.random() * 5) + 1;
  const categoryBook = useSelector((store)=> store.addbooks.items)
  let obj={}
  for(let name in categoryBook){
    console.log(name)
    console.log(categoryBook)
    for(let item of categoryBook[name]){
   
       if(cat == item.title){
        obj.title= item.title;
        obj.author= item.author;
        obj.description = item.description;
        obj.img = item.image
       }
    }
  }
  return (
    <div className='Bookdetails'>
      {console.log(obj)}
       <img src={obj.img} alt='background'></img>
        <div className="infobook">
        <p className='title'>Title:{obj.title} </p>
        <p className='author'>Author:{obj.author} </p>
        <p className='des'>Description:{obj.description} </p>
 
        <p className='rating'>
        <span>Rating: </span>{'★'.repeat(str)}{'☆'.repeat(5 - str)}
        </p>
        </div>
      
    
    </div>
  )
}

export default BookDetails
