import React from "react";
import "./card-list.styles.scss";
import  Card  from "../card/card.component";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.musicList.map((musicItem) => (
        <Card key={musicItem.trackId} music={musicItem}/>
      ))}
    </div>
  );
};
