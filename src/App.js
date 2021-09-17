import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Component imports
import HomeView from "./views/HomeView";
import NavBar from "./components/NavBar";
import SweetsView from "./views/SweetsView";
import PlaceOrderView from "./views/PlaceOrderView";
import Footer from "./components/Footer";
import OrdersView from "./views/OrdersView";
import AddSweetsView from "./views/AddSweetsView";
import AuthView from "./views/AuthView";
import AdminView from "./views/AdminView";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/add-sweets" component={AddSweetsView} />
          <Route exact path="/sweets" component={SweetsView} />
          <Route exact path="/order" component={PlaceOrderView} />
          <Route exact path="/orders" component={OrdersView} />
          <Route exact path="/auth" component={AuthView} />
          <Route exact path="/admin" component={AdminView} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
