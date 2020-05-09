import React, { Component } from "react";
import { FcHome } from "react-icons/fc";
import DashboardComponent from "./DashboardComponent";
import { IconContext } from "react-icons";
import NotificationComponent from "./practice/NotificationComponent";
export default class HomeComponent extends Component {
  render() {
    return (
      <IconContext.Provider value={{color:'blue',size:'2rem'}}>
        <div>
          <h1>
            <FcHome />
            Home Page
          </h1>
          <DashboardComponent />

      <NotificationComponent />

        </div>
      </IconContext.Provider>
    );
  }
}
