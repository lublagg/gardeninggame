import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";
import Gardener from "./Gardener";
import GardenStore from "./GardenStore";
import Garden from "./Garden";
import { fetchGardener } from "../redux/gardener";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gardener: {},
    };
  }

  componentDidMount() {
    this.props.getGardener();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.gardener.id !== this.props.gardener.id) {
      this.setState({ gardener: this.props.gardener });
    }
  }

  render() {
    const gardener = this.state.gardener;
    return (
      <div>
        <h1>Plant your garden!</h1>
        {this.state.gardener.id ? (
          <div id="app">
            <Gardener gardener={gardener} />
            <Garden gardener={gardener} />
            <GardenStore gardener={gardener} />
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
