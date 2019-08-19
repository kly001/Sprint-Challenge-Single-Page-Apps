// import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
// import { NavLink } from "react-router-dom";

// // TODO: Add missing tabs below
// export default function TabNav() {
 
// };

import React from 'react';
import {NavLink} from "react-router-dom";

const TabNav = () => {
  return (
    
      <div className="App">
      
        <div>
         <NavLink to = "/">WelcomePage</NavLink>
        </div>
        <div>
         <NavLink to = "/characterList">Characters</NavLink>
        </div>
        <div>
          <NavLink to= "/episodesList">Episodes</NavLink>
        </div>
        <div>
          <NavLink to= "/locationsList">Locations</NavLink>
        </div>
      </div>
    
  );
};

export default TabNav;



//CODE FROM DOCUMENTATION
// import React from 'react'
// import { Tab } from 'semantic-ui-react'

// const panes = [
//   { menuItem: 'welcome-page', render: () => <Tab.Pane>Welcome Page</Tab.Pane> },
//   { menuItem: 'characterInfo', render: () => <Tab.Pane>Characters</Tab.Pane> },
//   { menuItem: 'episodesInfo', render: () => <Tab.Pane>Episodes</Tab.Pane> },
//   { menuItem: 'locationsInfo', render: () => <Tab.Pane>Locations</Tab.Pane> },
// ]

// const TabExampleBasic = () => <Tab panes={panes} />

// export default TabExampleBasic