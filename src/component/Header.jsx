import { Link } from "react-router-dom"
import './header.css'
import logo from '../Utilits/logo.json'
import Lottie from "lottie-react"
// import { useSelector } from "react-redux"
function Header(){
//  let cart = useSelector((store) => store.addbooks.items)
//  console.log(cart)
return(
  <>
  <nav className="navbar">
    <Lottie animationData={logo} style={{width:'80px'}}></Lottie>
    <ul>
      <li>
        <Link to='/' className="lk">Home</Link>
      </li>
      <li>
        <Link to='/browsebook' className="lk">BrowseBook</Link>
      </li>
      <li>
        <Link to='/addbook' className="lk">Addbook</Link>
      </li>
    </ul>
  </nav>
  </>
)
}
export default  Header