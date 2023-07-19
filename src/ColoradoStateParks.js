import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife, elevation } from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks();  // logs "42 parks!"
  wildlife();  // logs "Elk, Bighorn Sheep, Moose"
  elevation();  // logs "9583 ft"

  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
      <p>Trees found: {trees}</p>
    </div>
  );
}

export default ColoradoStateParks;
