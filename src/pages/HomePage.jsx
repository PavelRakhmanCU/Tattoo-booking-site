import React from "react";
import ArtistInfo from "../components/ArtistInfo"; // Assuming ArtistInfo is in a separate file
import GeneralInfo from "../components/GenralInfo";

function Home() {
  return (
    <main>
      <ArtistInfo/>
    <GeneralInfo></GeneralInfo>
    </main>
  );
}

export default Home;