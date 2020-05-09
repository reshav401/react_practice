import React from "react";
import "./App.css";
import NavComponent from "./components/NavComponent";
import AboutPage from "./components/AboutPage";
import ShopPage from "./components/ShopPage";
import HomeComponent from "./components/HomeComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserComponent from "./components/useractivity/UserComponent";
import UserDetail from "./components/UserDetail";
import SearchFoodComponent from "./components/SearchFoodComponent";
import ModalComponent from "./components/practice/ModalComponent";
// /Users/reshav/AndroidStudioProjects/MyApplication
function App() {
  return (
    <Router>
      <div className="App">
        <ModalComponent/>
        {/* <NavComponent />
        <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/users" component={UserComponent} />
        <Route path="/userdetail/:id" component={UserDetail}/>
        
        <Route path="/sfood" component={SearchFoodComponent}/>
        </Switch> */}
       
      </div>
    </Router>
  );
}

export default App;
