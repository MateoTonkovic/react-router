import React from "react";
import { useOutletContext } from "react-router-dom";

function Oulet1() {
  const context = useOutletContext();

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h2>Este es el outlet 1</h2>
      <p>{JSON.stringify(context)}</p>
    </div>
  );
}

export default Oulet1;
