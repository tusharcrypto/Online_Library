import "./CSS/BrowseBook.css";
// import Scifiction from '../Pages/Scifiction.js'
import books from "../Utilits/books.js";
import Scifiction from "./Scifiction.jsx";
import { useState } from "react";
import Book from "./Book.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const BrowseBook = () => {
  const [category,setCategoty] = useState('Fiction');
  const [search,setSearch] = useState([]);
  const [value,setValue] = useState()
  const [flag,setflag] = useState(false)
  const navigate = useNavigate()
  

  const selector = useSelector((store)=> store.addbooks.items)
  // console.log(selector)
  function handsubmit(e){
    e.preventDefault();
    let ans = value;
    for(let book in selector){
      console.log(book)
      for(let item of selector[book]){
        if(ans ==  item.title.toLowerCase() || ans == item.author.toLowerCase()){
          console.log(item)
          setSearch(item)
        }
      }
    }
    if(!flag){
      setflag(!flag)
    }
   
    setValue('')
  }
  function handleSearch(e){
    let ans = e.target.value;
    ans = ans.toLowerCase();
    setValue(ans);
    
  }
  // console.log(search)
  function handleoption(e) {
    setCategoty(e.target.value)
    navigate(`/book/${e.target.value}`)
    if(flag){
      setflag(!flag)
    }
  }
  return (
    <div className="brobook">
      <div className="category">
        <form onSubmit={handsubmit}>
        <input
          type=""
          placeholder="search the book by title or author"
          className="sarchbar"
        onChange={(e)=>{
          handleSearch(e)
        }} value={value}></input>
        </form>
       

        <select className="catlist"  onChange={(e) => {
              handleoption(e);
            }}>
          <option
            
          >
            Choose Category
          </option>
          <option value="Trending">Trending</option>
          <option value="Fiction">Fiction</option>
          <option value="Sci-Fiction">Sci-Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Hindi Literature">Hindi Literature</option>
        </select>
      </div>
      {/*  */}

      {flag ? <Book item={search} ></Book> : <Scifiction scifi={books.books[category]}></Scifiction>}
       
      
    </div>
  );
};

export default BrowseBook;
