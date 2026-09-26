import { Link, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Home from './pages/Home';
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

function Layout() {
  const location = useLocation();


  //Show navbar in these pages
  const showNavBar = ["/", "/login", "/register"].includes(location.pathname);

  return (
    <>
      {showNavBar && <Navbar />}


      <Routes>
        {/* Puplic Routes */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        {/* Protected Routes */}

        <Route path="/dashboard" element=

          {
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>

          }></Route>


      </Routes>


    </>)


}

export default function App() {
  return (
    <>
      <Router>


        <Layout />


      </Router>

    </>




  )
}
// const products = [
//   { id: '1', name: 'iphone' },
//   { id: '2', name: 'samsung' },

// ];

// function ReturnProductName() {
//   return (
//     <div>
//       {products.map(product => (
//         <div key={product.id} >{product.name}</div>
//       ))}
//     </div>

//   );
// }

// const elements = [
//   { name: "iPhone", price: 1000 },
//   { name: "Samsung", price: 800 },
//   { name: "Pixel", price: 700 }
// ];

// const prices = [100, 200, 300];

// //return elemnt more price 700
// // const result=elements.filter(element=>element.price > 700);

// // const find=elements.find(element=>element.price > 700);

// // const some=elements.some(element=>element.price > 700);

// const every = elements.every(element => element.price > 700);

// const reduce = prices.reduce(
//   (sum, price) => sum + price, 0

// );

// const user = {
//   name: "Ahmed",
//   age: 25
// };

// const { name, age } = user

// const [first, second, third] = prices

// const updateUserData = {
//   ...user,
//   age: '30'
// }


// function MaxPrice() {
//   return (

//     <h1>
//       {name} {age} <br></br>
//       {first}
//     </h1>


//   );
// }




// function MyButton() {
//   return (
//     <button>I'm a button</button>
//   );
// }

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);

  }, [count]

  );


  function increase() {
    setCount(prevCount => prevCount + 1)
  }

  function decrease() {
    setCount(prevCount => prevCount - 1)
  }

  return (<div> <h1 className="textlg text-green-500">Count : {count}</h1>
    <button className="button bg-green-500" onClick={increase}>+</button>
    <button className="button bg-red-500 mx-2" onClick={decrease}>-</button>

  </div>
  );

}

