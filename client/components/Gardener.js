import React from "react";

const Gardener = (props) => {
  const gardener = props.gardener;
  return (
    <div id="container">
      <h3>Your Stats:</h3>
      <p>
        <b>Name:</b> {gardener[0].name}
      </p>
      <p>
        <b>Goodwill:</b> {gardener[0].goodwill} pts
      </p>
      <p>
        <b>Money:</b> ${gardener[0].money}
      </p>
    </div>
  );
};

export default Gardener;
