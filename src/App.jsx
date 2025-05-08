
import './App.css'
import Login from './component/Login'
import { Routes, Route } from 'react-router-dom'
import Otp from './component/Otp'
import Home from './component/Home'


function App() {

  // return (
  //   <>
  //       <div className='bg-lime-400 h-screen w-screen  flex items-center justify-center'>
  //       <Login></Login>
  //     </div>
  //   </>
  // )
  return (
    <div className='bg-lime-400 h-screen w-screen  flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/otp' element={<Otp></Otp>}></Route>
      </Routes>

    </div>
  )
}

export default App
