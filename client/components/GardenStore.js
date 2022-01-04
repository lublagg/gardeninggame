import React from "react";
import { connect } from "react-redux";
import { fetchSeeds, updateSeed } from "../redux/seeds";
import { fetchSeed } from "../redux/singleSeed";
import { fetchGardener, updateGardener } from "../redux/gardener";

export class GardenStore extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getSeeds();
  }

  async handleClick(e) {
    e.preventDefault();

    if (e.target.value > this.props.gardener.money) {
      alert(
        "oh no! you do not have enough money to buy any seeds. you better ask a neighbor for some help!"
      );
    } else {
      // updating seed
      await this.props.getSingleSeed(e.target.id);
      let newSeed = this.props.singleSeed;
      newSeed.gardenerId = 1;
      // await this.props.updateSeed({ ...this.props.singleSeed, ...newSeed });

      // updating gardener
      let newGardener = this.props.gardener;
      newGardener.seeds.push(newSeed);
      let price = Number(e.target.value);
      newGardener.money = this.props.gardener.money - price;
      await this.props.updateGardener({
        ...this.props.gardener,
        ...newGardener,
      });
    }
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
                  <button
                    key={seed.id}
                    id={seed.id}
                    value={seed.price}
                    onClick={this.handleClick}
                  >
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
    singleSeed: state.seed,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getSeeds: () => dispatch(fetchSeeds()),
    getSingleSeed: (seedId) => dispatch(fetchSeed(seedId)),
    updateSeed: (seed) => dispatch(updateSeed(seed)),
    getGardener: () => dispatch(fetchGardener()),
    updateGardener: (gardener) => dispatch(updateGardener(gardener)),
  };
};

export default connect(mapState, mapDispatch)(GardenStore);
