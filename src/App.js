import { Route, Switch } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Body from "./components/Body";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
import "./styles/main.css";

function App() {
  return (
    <div className="bg-gray-100 ">
      <NavBar />
      <Switch>
        <Route path="/about" component={AboutUs} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/">
          <Body />
          <Products />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
