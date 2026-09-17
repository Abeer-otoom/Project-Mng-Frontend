import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';



export default function App() {
  return (
    // <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    //   <h1 className="text-2xl font-bold text-blue-500" >Welcome to our Full Stack Project</h1>
    //   <p className="mt-4 text-lg text-gray-700"> Welcome Lets start building </p>
    // </div>
    // <>
    //  <Welcome name="Abeer" age="28"/>
    // <Welcome name="mysam" age="26"/>
    // </>

    <>
      <Router>
        <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/about">About</Link> | {" "}
          <Link to="/contact">Contact</Link>

        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

        </Routes>


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