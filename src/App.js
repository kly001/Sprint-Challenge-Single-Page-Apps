import React from "react";
import {Route} from "react-router-dom";
import SearchForm from "./components/SearchForm";
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
      <TabNav />
      <SearchForm />

      <Route exact path= "/" component={WelcomePage}/>
      <Route  path= "/characterList" component={CharacterList}/>
      <Route  path= "/locationsList" component={LocationsList}/>
      <Route  path= "/episodesList" component={EpisodesList}/>
     
       {/*
      <AppRouter />  */}

  
    </main>
  );
}
