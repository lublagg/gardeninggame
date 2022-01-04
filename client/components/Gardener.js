import React from "react";

const Gardener = (props) => {
  const gardener = props.gardener;
  return (
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
  );
};

export default Gardener;
