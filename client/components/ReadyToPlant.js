import React from "react";
import { connect } from "react-redux";
import { updateSeed } from "../redux/seeds";
import { updateGardener } from "../redux/gardener";
import { fetchSeed } from "../redux/singleSeed";

class ReadyToPlant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seeds: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      seeds: [...this.props.gardenerSeeds],
    });
  }

  async handleClick(e) {
    await this.props.getSingleSeed(e.target.id);
    let updatedSeed = this.props.singleSeed;
    updatedSeed.isSeed = false;
    updatedSeed.isGrowing = true;

    let updatedGardener = this.props.gardener;

    updatedGardener.seeds = updatedGardener.seeds.map((seed) =>
      seed.id === updatedSeed.id ? updatedSeed : seed
    );

    await this.props.updateGardener({
      ...this.props.gardener,
      ...updatedGardener,
    });
  }

  render() {
    const seeds = this.state.seeds;
    let readyToPlant = seeds.filter((seed) => seed.isSeed);
    return (
      <ul>
        <b>Ready to plant:</b>
        {readyToPlant.length ? (
          readyToPlant.map((seed) => (
            <li key={seed.id}>
              {seed.name}{" "}
              <button key={seed.id} id={seed.id} onClick={this.handleClick}>
                Plant
              </button>
            </li>
          ))
        ) : (
          <li>No seeds to plant</li>
        )}
      </ul>
    );
  }
}

const mapState = (state) => {
  return {
    singleSeed: state.seed,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getSingleSeed: (seedId) => dispatch(fetchSeed(seedId)),
    updateSeed: (seed) => dispatch(updateSeed(seed)),
    updateGardener: (gardener) => dispatch(updateGardener(gardener)),
  };
};

export default connect(mapState, mapDispatch)(ReadyToPlant);
