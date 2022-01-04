import React from "react";
import { connect } from "react-redux";
import { fetchSeeds, updateSeed } from "../redux/seeds";
import { fetchSeed } from "../redux/singleSeed";
import { fetchGardener } from "../redux/gardener";

export class GardenStore extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getSeeds();
  }

  async handleClick(e) {
    await this.props.getSingleSeed(e.target.id);
    let newSeed = this.props.singleSeed;
    newSeed.gardenerId = 1;
    await this.props.updateSeed({ ...this.props.singleSeed, newSeed });
    this.props.getGardener();
  }

  render() {
    const seeds = this.props.seeds;
    return (
      <div id="container">
        <h3>Seeds for sale:</h3>
        <div id="seeds">
          {seeds.length ? (
            <ul>
              {seeds.map((seed) => (
                <li key={seed.id}>
                  {seed.name}: ${seed.price}{" "}
                  <button key={seed.id} id={seed.id} onClick={this.handleClick}>
                    Buy
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No seeds for sale!</p>
          )}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    seeds: state.seeds,
    gardener: state.gardener,
    singleSeed: state.seed,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getSeeds: () => dispatch(fetchSeeds()),
    getSingleSeed: (seedId) => dispatch(fetchSeed(seedId)),
    updateSeed: (seed) => dispatch(updateSeed(seed)),
    getGardener: () => dispatch(fetchGardener()),
  };
};

export default connect(mapState, mapDispatch)(GardenStore);
