import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"
import LocationsList from "./components/LocationsList"
import EpisodesList from "./components/EpisodesList"
// import AppRouter from "./components/AppRouter.js";

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <CharacterList />
      <LocationsList />
      <EpisodesList />
      {/* <TabNav /> */}
      {/* <AppRouter /> */}
    </main>
  );
}
