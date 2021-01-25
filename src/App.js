import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { incrementar, decrementar } from "./reducers";
import "./App.scss";
import { IonSearchBar } from "./components/ion-searchbar/ion-searchbar.component";
import { getList } from "./api";
import { debounce } from "lodash";
import { CardList } from "./components/card-list/card-list.component";
import { mdiHeart } from "@mdi/js";
import { mdiNumeric6Circle } from "@mdi/js";
import { mdiNumeric } from "@mdi/js";
import Icon from "@mdi/react";

const App = (props) => {
  const [musicList, setMusicList] = useState([]);
  const [searchField, setSearchField] = useState("black+eyed+peas");

  useEffect(() => {
    response(searchField);
  });

  const response = debounce(
    (value) =>
      getList(value).then((results) => {
        setMusicList(results);
      }),
    500
  );

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (searchField !== "") {
      response(searchField);
    } else {
      response(searchField);
    }
  };

  return (
    <React.Fragment>
      <div className="header">
        <div className="header-title-text">Prueba técnica</div>
        <IonSearchBar placeholder="Search" handleChange={handleChange} />
        <div className="header-icon">
          <Icon
            path={mdiHeart}
            title="heart"
            size={2}
            color="#ffff"
            className="header-icon-favourite"
          />
          <p className="header-icon-count">{props.valor}</p>
          {/* <Icon path={mdiNumeric} title="heart" size={1} color="grey" className="header-icon-count"/> */}
        </div>
      </div>
      <div className="container">
        <CardList musicList={musicList} />
      </div>
    </React.Fragment>
  );
};
// }

const mapStateToProps = (state) => {
  return {
    valor: state,
  };
};

const mapDispatchToProps = (dispatch) => ({
  incrementar: () => dispatch(incrementar()),
  decrementar: () => dispatch(decrementar()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
