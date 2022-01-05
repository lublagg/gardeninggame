import React from "react";

class Harvest extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const seeds = this.props.gardenerSeeds;
    let readyToHarvest = seeds.filter((seed) => seed.readyToHarvest);
    return (
      <ul>
        <b>Growing:</b>
        {readyToHarvest.length ? (
          readyToHarvest.map((seed) => <li key={seed.id}>{seed.name}</li>)
        ) : (
          <li>No plants ready to harvest</li>
        )}
      </ul>
    );
  }
}

export default Harvest;
