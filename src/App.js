import "./App.css";
import Balance from "./components/Balance";
import Spending from "./components/Spending";

function App() {
  const amount = 921.48;
  const spending = [26.14, 34.87, 52.36, 31.07, 28.56, 45.02, 34.56];
  return (
    <div className="App">
      <Balance amount={amount} />
      <Spending spending={spending} />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
