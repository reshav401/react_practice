import React, { Component } from "react";
import HeaderComponent from "./header/HeaderComponent";
import FooterComponent from "./footer/FooterComponent";

import ViewOffer from "./commingsoon/CountdownComponent";
export default class DashboardComponent extends Component {
  render() {
    return (
        <>
        <HeaderComponent />
        <ViewOffer futureDate="2020-05-04 00:02:00"  />
        <FooterComponent />
      </>
    );
  }
}
