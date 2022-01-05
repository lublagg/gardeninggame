import React from "react";
import { connect } from "react-redux";
import { fetchGardener, updateGardener } from "../redux/gardener";
import { fetchSeeds } from "../redux/seeds";
import { fetchSeed } from "../redux/singleSeed";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gardener: {},
      seeds: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getGardener();
    this.props.getSeeds();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.gardener.id !== this.props.gardener.id) {
      this.setState({ gardener: this.props.gardener });
    }
    if (prevProps.seeds.length !== this.props.seeds.length) {
      this.setState({ seeds: this.props.seeds });
    }
    // if (
    //   prevProps.gardener.id === this.props.gardener.id &&
    //   prevProps.gardener.seeds.length !== this.props.gardener.seeds.length
    // ) {
    //   this.setState({ gardener: this.props.gardener });
    // }
  }

  async handleClick(e) {
    e.preventDefault();

    if (e.target.value > this.props.gardener.money) {
      alert(
        "oh no! you do not have enough money to buy any seeds. you better ask a neighbor for some help!"
      );
    } else {
      // getting seed
      await this.props.getSingleSeed(e.target.id);
      let newSeed = this.props.singleSeed;
      newSeed.gardenerId = 1;

      // updating gardener
      let newGardener = this.props.gardener;
      newGardener.seeds.push(newSeed);
      let price = Number(e.target.value);
      newGardener.money = this.props.gardener.money - price;
      await this.props.updateGardener({
        ...this.props.gardener,
        ...newGardener,
      });
      this.setState({ gardener: newGardener });
    }
  }

  render() {
    let gardener = this.state.gardener;
    let seeds = this.state.seeds;

    return (
      <div>
        <h1>Plant your garden!</h1>
        {this.state.gardener.id ? (
          <div id="app">
            {/* {stats} */}
            <div id="container">
              <h3>Your Stats:</h3>
              <p>
                <b>Name:</b> {gardener.name}
              </p>
              <p>
                <b>Goodwill:</b> {gardener.goodwill} pts
              </p>
              <p>
                <b>Money:</b> ${gardener.money}
              </p>
            </div>

            {/* {garden} */}
            <div id="container">
              <div id="garden">
                <h3>Your Garden</h3>
                {/* {seeds that are ready for harvest} */}
                <ul>
                  <b>Ready to Harvest:</b>
                  {gardener.seeds.filter((seed) => seed.readyToHarvest)
                    .length ? (
                    gardener.seeds
                      .filter((seed) => seed.readyToHarvest)
                      .map((seed) => <li key={seed.id}>{seed.name}</li>)
                  ) : (
                    <li>No plants ready to harvest</li>
                  )}
                </ul>
                {/* {seeds that are growing} */}
                <ul>
                  <b>Growing:</b>
                  {gardener.seeds.filter((seed) => seed.isGrowing).length ? (
                    gardener.seeds
                      .filter((seed) => seed.isGrowing)
                      .map((seed) => <li key={seed.id}>{seed.name}</li>)
                  ) : (
                    <li>Nothing growing</li>
                  )}
                </ul>
                {/* {seeds to be planted} */}
                <ul>
                  <b>Ready to plant:</b>
                  {gardener.seeds.filter((seed) => seed.isSeed).length ? (
                    gardener.seeds
                      .filter((seed) => seed.isSeed)
                      .map((seed) => (
                        <li key={seed.id}>
                          {seed.name}
                          <button
                            key={seed.id}
                            id={seed.id}
                            onClick={() => console.log("hello")}
                          >
                            Plant
                          </button>
                        </li>
                      ))
                  ) : (
                    <li>No seeds to plant</li>
                  )}
                </ul>
              </div>
            </div>

            {/* {garden store} */}
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
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    gardener: state.gardener,
    seeds: state.seeds,
    singleSeed: state.seed,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getGardener: () => dispatch(fetchGardener()),
    getSeeds: () => dispatch(fetchSeeds()),
    getSingleSeed: (seedId) => dispatch(fetchSeed(seedId)),
    updateGardener: (gardener) => dispatch(updateGardener(gardener)),
  };
};

export default connect(mapState, mapDispatch)(App);
