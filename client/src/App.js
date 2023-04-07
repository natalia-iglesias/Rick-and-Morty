import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componenets/Home/Home";
import LandingPage from "./componenets/LandingPage/LandingPage";
import Details from "./componenets/Details/Details";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={LandingPage} />
          <Route path="/home" Component={Home} />
          <Route path="/details/:id" Component={Details} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
