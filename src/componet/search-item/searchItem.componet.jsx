import { useEffect, useState } from "react";
import SearchBoxComponent from "../search-box/searchBox.component";
import { useDispatch } from "react-redux";
import { setplayerSearchString } from "../../store/players/players.action";

const SearchItem = () => {
  const [searchPlayerString, setSearchPlayerString] = useState("");
  const dispatch = useDispatch();

  const searchChangeHandle = (e) => {
    const value = e.target.value;
    setSearchPlayerString(value);
  };

  const searchItemName = searchPlayerString
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");

  useEffect(() => {
    dispatch(setplayerSearchString(searchItemName));
  }, [searchItemName, dispatch]);

  return <SearchBoxComponent searchChangeHandle={searchChangeHandle} />;
};

export default SearchItem;
