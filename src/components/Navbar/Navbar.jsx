// import React from 'react'
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "bdt": {
        setCurrency({ name: "bdt", symbol: "৳" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Feature</li>
        <li>Pricing</li>
      </ul>

      <div className="nav-right">
        <select className="nav-select" onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="bdt">BDT</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
