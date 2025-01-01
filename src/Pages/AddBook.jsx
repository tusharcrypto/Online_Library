import Lottie from "lottie-react";
import "./CSS/addbook.css";
import addbook from "../Utilits/addbk.json";
import books from "../Utilits/books";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addbooks } from "../Utilits/Redux/bookslice.js";
const AddBook = () => {
  const [title,setTitle] = useState("");
  const [author,setAuthor] = useState("");
  const [desp,setdesp] = useState("");
  const [img,setImg] = useState();
  const [option,setoption] = useState("");
  const dispatch = useDispatch();
  function handleoption(e) {
    let ans = e.target.value;
    setoption(ans)
   
  }
  function handlesubmit(e){
    e.preventDefault();
    if(!option){
      alert('Choose the category')
      return
    }
    const obj ={}
    for(let book in books.books){
      if(option == book){
        obj.title=title;
        obj.author= author;
        obj.description=desp;
        obj.option=option
        obj.image = img;
      
      }
    }
   dispatch(addbooks(obj))
   setAuthor("");
   setdesp("")
   setTitle("")
   setoption("")  
   
   
  
  }
  return (
    <div className="addbook">
      <Lottie animationData={addbook} loop={false}></Lottie>
      <form onSubmit={handlesubmit}>
        <p>Add new Book to libray</p>
        <select onChange={handleoption} value={option} required>
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
        <label>Enter the Book Title</label>
        <input type="text" placeholder="Enter the title" onChange={(e)=>{setTitle(e.target.value)}} required value={title} ></input>
        <label>Enter the Book Author</label>
        <input type="text" placeholder="Enter the Author" onChange={(e)=>{setAuthor(e.target.value)}} required value={author}></input>
        <label>Enter the Book Description</label>
        <input type="text" placeholder="Enter the Description" onChange={(e)=>{setdesp(e.target.value)}} required value={desp} ></input>
        <label>Insert the image link</label>
        <input placeholder="Give the link" type="text" className="file" onChange={(e)=>{setImg(e.target.value)} }></input>
        <input type="submit" className="submit"></input>
      </form>
    </div>
  );
};

export default AddBook;
