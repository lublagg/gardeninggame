import React from "react";

const Garden = (props) => {
  const gardener = props.gardener;
  return (
    <div id="container">
      <div id="garden">
        <h3>Your Garden</h3>
        <ul>
          <b>Ready to harvest:</b>
          {gardener.seeds.filter((seed) => seed.readyToHarvest).length ? (
            gardener.seeds
              .filter((seed) => seed.readyToHarvest)
              .map((seed) => (
                <li key={seed.id}>
                  {seed.name}
                  <button key={seed.id}>Harvest</button>
                </li>
              ))
          ) : (
            <li>Nothing ready to harvest</li>
          )}
        </ul>
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
        <ul>
          <b>Ready to plant:</b>
          {gardener.seeds.filter((seed) => seed.isSeed).length ? (
            gardener.seeds
              .filter((seed) => seed.isSeed)
              .map((seed) => (
                <li key={seed.id}>
                  {seed.name} <button key={seed.id}>Plant</button>
                </li>
              ))
          ) : (
            <li>No seeds to plant</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Garden;
