import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import ServerError from "./../components/LottiFiles/500.json";

function Lotti() {
  return (
    <div>
      <Player
        autoplay
        loop
        src={ServerError}
        style={{ height: "500px", width: "500px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
      <h1>Please Check Your Internet Connection</h1>
    </div>
  );
}

export default Lotti;
