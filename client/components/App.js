import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";
import Gardener from "./Gardener";
import GardenStore from "./GardenStore";
import Garden from "./Garden";
import { fetchGardener } from "../redux/gardener";

class App extends React.Component {
  componentDidMount() {
    this.props.getGardener();
  }

  render() {
    const gardener = this.props.gardener;
    return (
      <div>
        <h1>Plant your garden!</h1>
        {gardener.length ? (
          <div id="app">
            <Gardener gardener={this.props.gardener} />
            <Garden gardener={this.props.gardener} />
            <GardenStore gardener={this.props.gardener} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return { gardener: state.gardener };
};

const mapDispatch = (dispatch) => {
  return {
    getGardener: () => dispatch(fetchGardener()),
  };
};

export default connect(mapState, mapDispatch)(App);
