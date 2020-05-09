import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavComponent extends Component {
  render() {
    return (
      <nav>
        <Link to="/" >
        <h1>Logo</h1></Link>
        <ul className="nav-links">
          <Link className="link" to="/about">
            <li>About</li>
          </Link>
          <Link className="link" to="/shop">
            <li>Shop</li>
            </Link> <Link className="link" to="/users">
            <li>User List</li>
          </Link>
          <Link className="link" to="/sfood">
            <li>Search For Food</li>
          </Link>
          <Link className="link" to="/voffer">
            <li>View Offer</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
