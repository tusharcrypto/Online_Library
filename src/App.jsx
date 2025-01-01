
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BrowseBook from './Pages/BrowseBook'
import AddBook from './Pages/AddBook'
import AppLayout from './component/AppLayout'
import Home from './Pages/Home'
import ErrorNot from './component/ErrorNot'
import BookDetails from './Pages/BookDetails.jsx'
import BookCategory from './Pages/BookCategory.jsx'
// import BookDetails from './Pages/BookDetails'
const approutes = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout></AppLayout>,
    children:[
      {
        path:'',
        element:<Home></Home>
      },
      {
        path:'browsebook',
        element:<BrowseBook></BrowseBook>
      },
      {
        path:'addbook',
        element:<AddBook></AddBook>
      },{
        path:'bookdetail/:title',
        element:<BookDetails></BookDetails>
      },{
        path:'book/:category',
        element:<BookCategory></BookCategory>
      }
    ],
    errorElement:<ErrorNot></ErrorNot>
  }
])
function App() {
  return (
    <>
    
    <RouterProvider router={approutes} ></RouterProvider>
   
    </>
  )
}

export default App
