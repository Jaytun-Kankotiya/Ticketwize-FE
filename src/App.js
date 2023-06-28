
import React, {useEffect, useState} from "react";
import GlobalStyles from './styles/GlobalStyles';

import ComponentRenderer from "./ComponentRenderer.js";
// import ThankYouPage from "./ThankYouPage.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const Message = ({ message}) => {
  <section>
    <p> {message} </p>
  </section>
}


export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;
  const [message, setMessage] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if(query.get('success')){
      setMessage("Ticket Booked Successfully! You will receive the mail confirmation.")
    }
    if(query.get('canceled')){
      setMessage("Order Canceled - Continue to book around and checkout when you're ready.")
    };
    
  }, []);
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/components/:type/:subtype/:name/:event_id" element={<ComponentRenderer />} />
          <Route path="/components/:type/:subtype/:name" element={<ComponentRenderer />} />
          <Route path="/components/Payment/PaymentSuccess" element={<ComponentRenderer />} />
          {/* <Route path="/thank-you" element={<ThankYouPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

// // export default EventLandingPage;
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

// export default App;
