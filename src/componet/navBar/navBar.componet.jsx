import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import FilterPlayerSelect from "../FilterPlayer/filter-player.componet";
import SearchItem from "../search-item/searchItem.componet";
import { NavigationContainer, NavLinkContainer, NavLink } from "./navBar.style";

const NavBar = () => {
  const location = useLocation();
  return (
    <Fragment>
      <NavigationContainer>
        <h1>CricPlayerSpotlight</h1>
        <NavLinkContainer>
          {location.pathname === "/playersList" && (
            <>
              {" "}
              <NavLink>
                <SearchItem />
              </NavLink>
              <NavLink>
                <FilterPlayerSelect />
              </NavLink>
            </>
          )}
        </NavLinkContainer>
      </NavigationContainer>
    </Fragment>
  );
};

export default NavBar;
