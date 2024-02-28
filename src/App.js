import logo from "./logo.svg";
import "./App.css";
import Footer from "./Footer/Footer";
import watchguard_logo from "./images/watchguard_logo.png";
import Login from "./login";
import Mainpage from "./Main_page";

function App() {
  return <>{true ? <Mainpage /> : <Login />}</>;
}

export default App;
