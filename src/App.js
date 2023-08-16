//2920a8b31713467d8c5bcc203a0cf313
import Pages from "./Pages/Pages";
import Category from "./Components/Category";
import Searchbar from "./Components/Searchbar";
import logo from "./logo.png"
import { Link } from "react-router-dom";
function App() {
  return (
    <div className=" bg-black min-h-screen text-class relative">
      <Link to="/"><img src={logo} alt="logo" className="w-28 relative top-3 left-44"/></Link>
      <Searchbar/>
      <Category/>
      <Pages/>
    </div>
  );
}

export default App;
