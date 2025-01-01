import './CSS/hero.css'
import bg from '../Utilits/opening.json'
import Lottie from 'lottie-react'
const Hero = () => {
  return (
    <div className="hero">
      <Lottie animationData={bg} className='top'></Lottie>
      <div className="para">
          <p className='para1'>Unlock the World of Knowledge</p>
          <p className='para2'>Your Gateway to Endless Stories and <span style={{}}> Wisdom!</span></p>
      </div>
    </div>
  )
}

export default Hero
