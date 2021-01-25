import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { incrementar, decrementar } from '../../reducers';
import "./card.styles.scss";
import Icon from "@mdi/react";
import { mdiHeartOutline } from "@mdi/js";
import { mdiHeart } from '@mdi/js';

const Card = (props) => {
  const [favourite, setFavourite] = useState(false);


const handleFavourites = (e) => {
  if (favourite) {
    setFavourite(false);
    props.decrementar();
  }else {
    setFavourite(true);
    props.incrementar();
  } 
}

  return (
    
    <div className="card-container">
      <img
        alt="robots"
        src={props.music.artworkUrl100.replace("100x100", "1200x1200")}
        className="card-image"
      />
      <div className="card-body">
        <h2 className='card-title'>{props.music.trackName} </h2>
        <p>{props.music.collectionName}</p>
        <div className="card-icon" onClick={handleFavourites} >
          {favourite ? <Icon path={mdiHeart} title="heart" size={1}  color="#95dada"/> :
          <Icon path={mdiHeartOutline} title="heart" size={1} color="#95dada"/>
          } 
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    valor: state,
  };
};

const mapDispatchToProps = (dispatch) => ({
  incrementar: () => dispatch(incrementar()),
  decrementar: () => dispatch(decrementar()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Card);
