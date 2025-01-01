import { Link } from "react-router-dom";
import "./CSS/book.css";

const Book = (prop) => {
  function handledetails(){

  }
  // console.log(prop)
  return (
  
    <div className="book" onClick={handledetails}>
      <div className="eachbook">
        <img src={prop.item.image}></img>
        <div className="info">
          <p className="title">Title: {prop.item.title}</p>
          <p className="author">Author: {prop.item.author}</p>
          <p className="des">Description: {prop.item.description}</p>
          <Link to={`/bookdetail/${prop.item.title}`} >View details</Link> 
        </div>
        
            </div>
    </div>
   
  );
};

export default Book;
