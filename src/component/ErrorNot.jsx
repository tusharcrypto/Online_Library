import Lottie from 'lottie-react'
import err from '../Utilits/error.json'
const ErrorNot = () => {
  return (
    <div>
      <Lottie animationData={err} style={{
        width:'400px' ,
        position:'relative',
        left:'35%'
      }}></Lottie>
      <p style={{textAlign:'center',fontSize:'25px',fontFamily:'sans-serif'}}>Opps Page Not found</p>
    </div>
  )
}

export default ErrorNot
