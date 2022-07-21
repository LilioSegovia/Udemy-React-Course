//import { Component } from "react";
import CardContainer from "../CardContainer/card-container";
import "./card-list.styles.css";

const CardList = ({ monsters }) => {
  <div className="card-list">
    {monsters.map((monster) => {
      return <CardContainer monster={monster} />;
    })}
  </div>;
};

export default CardList;
