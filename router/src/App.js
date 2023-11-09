import React from 'react'
 import {Routes, Route} from "react-router-dom"
import Featured from './components/featured/Featured'
import Best from './components/best/Best'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
          <Route path='/' element={<Hero />} />
            <Route path='/search' element={<Best />} />
            <Route path='/about' element={<Featured />} />
            <Route path='/contact' element={<Featured />} />
         
        </Routes>
      <Footer />
    </div>
  );
}

export default App;


// import './App.css';
// import {Routes, Route} from "react-router-dom"
// import Nav from "./components/Nav"

// function App() {
//   return (
//     <div className="App">
//        <h1>React Router</h1>
//        <Nav />
//        <Routes>
//           <Route path='/' element={<Home/>} />
//           <Route path='/users' element={<Users/>} />
//           <Route path='/users/123' element={<User/>} />
//           <Route path='/users/me' element={<UserMe/>} />
//        </Routes>
//     <Footer/>
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h1>i am HOME</h1>
//     </div>
//   )
// }

// function Users() {
//   return (
//     <div>
//       <h1>i am Users</h1>
//     </div>
//   )
// }

// function User() {
//   return (
//     <div>
//       <h1>i am USER X</h1>
//     </div>
//   )
// }

// function UserMe() {
//   return (
//     <div>
//       <h1>i am USER ME</h1>
//     </div>
//   )
// }

// function Footer() {
//   return (
//     <div>
   
//       <p>[facebook] [twitter] [github] </p>
//     </div>
//   )
// }

// export default App;
