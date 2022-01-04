import React from "react";
import { connect } from "react-redux";
import { fetchSeeds } from "../redux/seeds";
import { fetchSeed } from "../redux/singleSeed";
import { updateGardener } from "../redux/gardener";

export class GardenStore extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getSeeds();
  }

  handleClick(e) {
    const newGardenerInfo = this.props.gardener;
    const seedInfo = this.props.getSingleSeed(e.target.id);
    console.log(seedInfo);
    console.log(e.target.id, e.target.value);
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
  return { seeds: state.seeds, gardener: state.gardener };
};

const mapDispatch = (dispatch) => {
  return {
    getSeeds: () => dispatch(fetchSeeds()),
    getSingleSeed: (seedId) => dispatch(fetchSeed(seedId)),
    updateGardener: (gardener) => dispatch(updateGardener(gardener)),
  };
};

export default connect(mapState, mapDispatch)(GardenStore);
