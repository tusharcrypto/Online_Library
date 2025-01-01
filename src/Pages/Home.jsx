import Hero from "./Hero"
import TrendingBook from "./TrendingBook"
import Scifiction from "./Scifiction.jsx"
import { useSelector } from "react-redux"
const Home = () => {
  const selector = useSelector((store)=> store.addbooks.items)
  // console.log(selector)
  return (
    <div>
    <Hero></Hero>
    <TrendingBook  top={selector.Trending} nm={'Trendind and Popular'} ></TrendingBook>
    <Scifiction scifi={selector["Non-Fiction"]}></Scifiction>
    <TrendingBook  top={selector["Hindi Literature"]} nm={'Hindi Literature'}></TrendingBook>
    <p>{selector.length}</p>
    </div>
  )
}

export default Home
