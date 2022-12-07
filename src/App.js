import './App.css';
import Home from './components/Home';
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './components/SearchPage';


export default function App() {

  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="./" element={<Home/>}>

        </Route>
        <Route path="./search" element={<SearchPage/>}>

        </Route>
      </Switch>
    </Router>
  <Home />
  </div>
);
}

// import './App.css';
// import Home from './components/Home';



// function App() {
//   return (
//     <div className="App">
//       <Home />
//       </div>
//     );
// }
//  export default App;