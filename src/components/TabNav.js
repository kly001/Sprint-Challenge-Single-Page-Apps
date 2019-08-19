// import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
// import { NavLink } from "react-router-dom";

// // TODO: Add missing tabs below
// export default function TabNav() {
 
// };

// import React from 'react';
// import {NavLink} from "react-router-dom";

// const TabNav = () => {
//   return (
    
//       <div className="App">
      
//         <div>
//          <NavLink to = "/">WelcomePage</NavLink>
//         </div>
//         <div>
//          <NavLink to = "/characterList">Characters</NavLink>
//         </div>
//         <div>
//           <NavLink to= "/episodesList">Episodes</NavLink>
//         </div>
//         <div>
//           <NavLink to= "/locationsList">Locations</NavLink>
//         </div>
//       </div>
    
//   );
// };

// export default TabNav;



//CODE FROM DOCUMENTATION
import React from 'react'
import { Tab, Menu, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const Nav = props => (
  <NavLink exact {...props} activeClassName="active"/>
)

const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>
const welcomeLabel = createLabel("home", "Home Page")
const characterLabel = createLabel("users", "Characters")
const locationLabel = createLabel("map", "Locations")
const episodesLabel = createLabel("play", "Episodes")

 const panes = [
  { menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={welcomeLabel} /> },
  { menuItem: <Menu.Item key='characters' as={Nav} to={`/characterList`} content={characterLabel} /> },
  { menuItem: <Menu.Item key='locations' as={Nav} to={`/locationsList`} content={locationLabel} /> },
  { menuItem: <Menu.Item key='episodes' as={Nav} to={`/episodesList`} content={episodesLabel} /> }
 ]

 const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />

export default TabNav