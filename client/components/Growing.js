import React from "react";

class Growing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const seeds = this.props.gardenerSeeds;
    let growingSeeds = seeds.filter((seed) => seed.isGrowing);
    return (
      <ul>
        <b>Growing:</b>
        {growingSeeds.length ? (
          growingSeeds.map((seed) => <li key={seed.id}>{seed.name}</li>)
        ) : (
          <li>Nothing growing</li>
        )}
      </ul>
    );
  }
}

export default Growing;
